package com.tools.service.impl;

import com.tools.dao.UserDao;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.user.UserBaseDto;
import com.tools.model.User;
import com.tools.service.UserService;
import com.tools.utils.MapUtil;
import com.tools.utils.RegUtils;
import com.tools.worker.Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by DT254 on 2018/1/9.
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Override
    public boolean _nameUnique(String name, Long userId) {
        User user = userDao.findFirstByUsername(name);
        return user == null || user.getId().equals(userId);
    }

    @Override
    public boolean _emailUnique(String email, Long userId) {
        User user = userDao.findFirstByEmail(email);
        return user == null || user.getId().equals(userId);
    }

    @Override
    public BaseResponseDTO nameUnique(String name, Long userId) {
        String property = "username";
        BaseResponseDTO dto = Worker.isBlank2(property, name);
        if (!Worker.OK(dto)) return dto;
        if (!RegUtils.isUsername(name)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, MapUtil
                .build(1).put(property, "格式错误"));
        if (!this._nameUnique(name, null)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, MapUtil
                .build(1).put(property, "已存在"));
        return Worker.OK();
    }

    @Override
    public BaseResponseDTO emailUnique(String email, Long userId) {
        String property = "email";
        BaseResponseDTO dto = Worker.isBlank2(property, email);
        if (!Worker.OK(dto)) return dto;
        if (!RegUtils.isEmail(email)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, MapUtil
                .build(1).put(property, "格式错误"));
        if (!this._emailUnique(email, null)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, MapUtil
                .build(1).put(property, "已存在"));
        return Worker.OK();
    }

    @Override
    public BaseResponseDTO createUser(UserBaseDto userBaseDto) {
        //username
        BaseResponseDTO dto=nameUnique(userBaseDto.getUsername(),null);
        if(!Worker.OK(dto))return dto;
        //password
        dto=Worker.isBlank2("password",userBaseDto.getPassword());
        if(!Worker.OK(dto))return dto;
        //email
        dto=emailUnique(userBaseDto.getEmail(),null);
        if(!Worker.OK(dto))return dto;
        //vaildCode
        dto=Worker.isBlank2("validCode",userBaseDto.getVaildCode());
        if(!Worker.OK(dto))return dto;

        //comapre vaild code
        return Worker.OK();
    }
}
