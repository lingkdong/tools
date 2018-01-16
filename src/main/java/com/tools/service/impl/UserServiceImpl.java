package com.tools.service.impl;

import com.tools.dao.UserDao;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.EmailDto;
import com.tools.dto.ErrorInfo;
import com.tools.dto.HttpStatus;
import com.tools.dto.user.UserBaseDto;
import com.tools.model.User;
import com.tools.service.EmailService;
import com.tools.service.UserService;
import com.tools.utils.RegUtils;
import com.tools.utils.StringUtil;
import com.tools.worker.SessionWorker;
import com.tools.worker.Worker;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.*;

/**
 * Created by DT254 on 2018/1/9.
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;
    @Autowired
    private EmailService emailService;

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
        if (!RegUtils.isUsername(name)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo
                ().property(property).HttpStatus(HttpStatus.INVALID_FORMAT).build());
        if (!this._nameUnique(name, null)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,  ErrorInfo.newErrorInfo
                ().property(property).HttpStatus(HttpStatus.ALREADY_EXIT).build());
        return Worker.OK();
    }

    @Override
    public BaseResponseDTO emailUnique(String email, Long userId) {
        String property = "email";
        BaseResponseDTO dto = Worker.isBlank2(property, email);
        if (!Worker.OK(dto)) return dto;
        if (!RegUtils.isEmail(email)) return new BaseResponseDTO(HttpStatus.INVALID_FORMAT,  ErrorInfo.newErrorInfo
                ().property(property).HttpStatus(HttpStatus.INVALID_FORMAT).build());
        if (!this._emailUnique(email, null)) return new BaseResponseDTO(HttpStatus.ALREADY_EXIT,  ErrorInfo.newErrorInfo
                ().property(property).HttpStatus(HttpStatus.ALREADY_EXIT).build());
        return Worker.OK();
    }

    @Override
    public BaseResponseDTO createUser(UserBaseDto userBaseDto) {
        List<ErrorInfo> errorInfos=new ArrayList<>();
        //username
        BaseResponseDTO dto = nameUnique(userBaseDto.getUsername(), null);
        if (!Worker.OK(dto))errorInfos.add((ErrorInfo) dto.getData());
        //password
        dto = Worker.isBlank2("password", userBaseDto.getPassword());
        if (!Worker.OK(dto))errorInfos.add((ErrorInfo) dto.getData());
        //email
        dto = emailUnique(userBaseDto.getEmail(), null);
        if (!Worker.OK(dto))errorInfos.add((ErrorInfo) dto.getData());
        //vaildCode
        dto = Worker.isBlank2("validCode", userBaseDto.getVaildCode());
        if (!Worker.OK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        if(CollectionUtils.isNotEmpty(errorInfos)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,errorInfos);

        //comapre vaild code with session
        HttpSession session = userBaseDto.getRequest().getSession();
        String code = (String) session.getAttribute(userBaseDto.getEmail());
        if (!userBaseDto.getVaildCode().equalsIgnoreCase(code))
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,ErrorInfo.newErrorInfo().property("validCode")
                    .HttpStatus(HttpStatus
                    .PARAM_INCORRECT).build());
        session.removeAttribute(userBaseDto.getEmail());
        //save
        userDao.save(buildUser(userBaseDto));
        //update session
        session.setAttribute(userBaseDto.getUsername(), "nologin");
        return Worker.OK();
    }

    @Override
    public BaseResponseDTO sendValid(UserBaseDto userBaseDto) {
        List<ErrorInfo> errorInfos=new ArrayList<>();
        //username
        BaseResponseDTO dto = nameUnique(userBaseDto.getUsername(), null);
        if (!Worker.OK(dto))errorInfos.add((ErrorInfo) dto.getData());
        //password
        dto = Worker.isBlank2("password", userBaseDto.getPassword());
        if (!Worker.OK(dto))errorInfos.add((ErrorInfo) dto.getData());
        //email
        dto = emailUnique(userBaseDto.getEmail(), null);
        if (!Worker.OK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        if(CollectionUtils.isNotEmpty(errorInfos)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,errorInfos);

        StringBuilder msg = new StringBuilder();
        msg.append(userBaseDto.getUsername()).append("，你好").append(System.lineSeparator())
                .append("以下为你的邮箱验证码：").append(System.lineSeparator())
                .append(StringUtil.getValidCode(6).toUpperCase());
       Boolean flag= emailService.send(EmailDto.newEmailDto()
                .subjet("Prefox邮箱验证")
                .emailTo(userBaseDto.getEmail())
                .msg(msg.toString())
                .build()
        );
        if(!Boolean.TRUE.equals(flag))  return new BaseResponseDTO(HttpStatus.INTERNAL_SERVER_ERROR,
                "The email failed, please try again later.");
        return Worker.OK();
    }

    private User buildUser(UserBaseDto dto) {
        Date date = new Date();
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setPassword(DigestUtils.md5Hex(dto.getPassword()));
        user.setEmail(dto.getEmail());
        user.setCreateTime(date);
        user.setLastUpdateTime(date);
        return user;
    }
}
