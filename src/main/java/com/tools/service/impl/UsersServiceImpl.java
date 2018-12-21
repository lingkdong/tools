package com.tools.service.impl;

import com.tools.dao.UserDao;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.user.FindUsersParam;
import com.tools.dto.user.UsersCardDto;
import com.tools.dto.user.UsersDto;
import com.tools.model.User;
import com.tools.service.UsersService;
import com.tools.utils.BeanUtil;
import com.tools.worker.Worker;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import static com.tools.utils.AvatarConstant.*;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

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
    public Page<UsersDto> findUsersDto(FindUsersParam findUsersParam, Pageable pageable) {
        Page users = findUsers(findUsersParam, pageable);
        if (pageable.getPageNumber() >= users.getTotalPages() && (users.getTotalPages() - 1) >= 0) {
            pageable = new PageRequest(users.getTotalPages() - 1, pageable.getPageSize(), pageable.getSort());
            users = findUsers(findUsersParam, pageable);
        }
        if (users.hasContent()) {
            List<UsersDto> usersDtos = new ArrayList<>();
            for (User item : (List<User>) users.getContent()) {
                usersDtos.add(toDto(item));
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
        user.setView(user.getView() + 1);
        userDao.save(user);
        return Worker.OK(detailDto);
    }

    private Page<User> findUsers(FindUsersParam findUsersParam, Pageable pageable) {
        User user = new User();
        ExampleMatcher exampleMatcher = ExampleMatcher.matching()
                .withMatcher("username", ExampleMatcher.GenericPropertyMatchers.contains())
                .withIgnoreNullValues()
                .withIgnoreCase()
                .withIgnorePaths("score","view")//ignore basic data type:int
                ;
        user.setUsername(findUsersParam.getUsername());
        Example<User> example = Example.of(user, exampleMatcher);
        return userDao.findAll(example,pageable);
    }

    public UsersDto toDto(User user){
        if(user==null) return null;
        return BeanUtil.cast(UsersDto.class, user);
    }

    public List<User> findAllByIdIn(Set<Long> userIds){
        return userDao.findAllByIdIn(userIds);
    }

    public Map<Long,User> toIdMap(List<User> users){
        if(CollectionUtils.isNotEmpty(users)){
            return users.stream().collect(Collectors.toMap(User::getId, Function.identity()));
        }
        return Collections.EMPTY_MAP;
    }
}
