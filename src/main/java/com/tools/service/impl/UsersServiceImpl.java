package com.tools.service.impl;

import com.tools.dao.UserDao;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.user.FindUsersDto;
import com.tools.dto.user.UsersCardDto;
import com.tools.dto.user.UsersDto;
import com.tools.model.User;
import com.tools.service.UsersService;
import com.tools.utils.BeanUtil;
import com.tools.worker.Worker;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import static com.tools.utils.AvatarConstant.*;
import java.util.ArrayList;
import java.util.List;

/**
 * @Author: dongxin
 * @Description:
 * @Date: 2018/5/28 16:58
 **/
@Service
public class UsersServiceImpl implements UsersService {
    @Autowired
    private UserDao userDao;
    @Override
    public Page<UsersDto> findUsersDto(FindUsersDto findUsersDto, Pageable pageable) {
        Page users = findUsers(findUsersDto, pageable);
        if (pageable.getPageNumber() >= users.getTotalPages()&&(users.getTotalPages() - 1)>=0) {
            pageable = new PageRequest(users.getTotalPages() - 1, pageable.getPageSize(), pageable.getSort());
            users = findUsers(findUsersDto, pageable);
        }
        if (users.hasContent()) {
            List<UsersDto> usersDtos = new ArrayList<>();
            for (User item : (List<User>) users.getContent()) {
                UsersDto usersDto=BeanUtil.cast(UsersDto.class, item);
                usersDto.setPicture(usersDto.getPicture());
                usersDtos.add(usersDto);
            }
            Page<UsersDto> result = new PageImpl<>(usersDtos, new PageRequest(users.getNumber(), users.getSize
                    ()), users.getTotalElements());
            return result;
        }
        return users;
    }

    @Override
    public BaseResponseDTO findUsersDto(String username) {
        if (StringUtils.isBlank(username)) {
            return new BaseResponseDTO(HttpStatus.NOT_FOUND);
        }
        User user = userDao.findFirstByUsername(username);
        if (user == null) {
            return new BaseResponseDTO(HttpStatus.NOT_FOUND);
        }
        UsersCardDto detailDto = BeanUtil.cast(UsersCardDto.class, user);
        detailDto.setPicture(getLargeAvatar(detailDto.getPicture()));
        //update viewed times
        user.setView(user.getView()+1);
        userDao.save(user);
        return Worker.OK(detailDto);
    }

    private Page<User> findUsers(FindUsersDto findUsersDto, Pageable pageable) {
        return (StringUtils.isBlank(findUsersDto.getUsername())) ? userDao.findAllByOrderByScoreDesc(pageable) : userDao
                .findByUsernameContainingOrderByScoreDesc(findUsersDto.getUsername(), pageable);
    }


}
