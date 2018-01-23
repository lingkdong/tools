package com.tools.service.impl;

import com.tools.dao.UserDao;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.EmailDto;
import com.tools.dto.ErrorInfo;
import com.tools.dto.HttpStatus;
import com.tools.dto.user.LoginDto;
import com.tools.dto.user.UserBaseDto;
import com.tools.model.User;
import com.tools.model.UserStatus;
import com.tools.service.EmailService;
import com.tools.service.UserService;
import com.tools.utils.PrefoxEmailTemp;
import com.tools.utils.RegUtils;
import com.tools.utils.StringUtil;
import com.tools.worker.Worker;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.collections.CollectionUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AccountException;
import org.apache.shiro.authc.DisabledAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.web.util.SavedRequest;
import org.apache.shiro.web.util.WebUtils;
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
    @Autowired
    private PrefoxEmailTemp prefoxEmailTemp;

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
        if (!Worker.isOK(dto)) return dto;
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
        if (!Worker.isOK(dto)) return dto;
        if (!RegUtils.isEmail(email)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,  ErrorInfo.newErrorInfo
                ().property(property).HttpStatus(HttpStatus.INVALID_FORMAT).build());
        if (!this._emailUnique(email, null)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,  ErrorInfo.newErrorInfo
                ().property(property).HttpStatus(HttpStatus.ALREADY_EXIT).build());
        return Worker.OK();
    }

    @Override
    public BaseResponseDTO createUser(UserBaseDto userBaseDto) {
        List<ErrorInfo> errorInfos=new ArrayList<>();
        //username
        BaseResponseDTO dto = nameUnique(userBaseDto.getUsername(), null);
        if (!Worker.isOK(dto))errorInfos.add((ErrorInfo) dto.getData());
        //password
        dto = Worker.isBlank2("password", userBaseDto.getPassword());
        if (!Worker.isOK(dto))errorInfos.add((ErrorInfo) dto.getData());
        //email
        dto = emailUnique(userBaseDto.getEmail(), null);
        if (!Worker.isOK(dto))errorInfos.add((ErrorInfo) dto.getData());
        //validCode
        dto = Worker.isBlank2("validCode", userBaseDto.getValidCode());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        if(CollectionUtils.isNotEmpty(errorInfos)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,errorInfos);

        //comapre valid code with session
        HttpSession session = userBaseDto.getRequest().getSession();
        String code = (String) session.getAttribute(userBaseDto.getEmail());
        if(code==null){
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,ErrorInfo.newErrorInfo().property("validCode")
                    .HttpStatus(HttpStatus.IS_EXPIRED).build());
        }
        if (!userBaseDto.getValidCode().equalsIgnoreCase(code))
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,ErrorInfo.newErrorInfo().property("validCode")
                    .HttpStatus(HttpStatus
                    .PARAM_INCORRECT).build());
        session.removeAttribute(userBaseDto.getEmail());
        //save
        userDao.save(buildUser(userBaseDto));
        //auto login by username;
        return Worker.OK();
    }

    @Override
    public BaseResponseDTO sendValid(UserBaseDto userBaseDto) {
        List<ErrorInfo> errorInfos=new ArrayList<>();
        //username
        BaseResponseDTO dto = nameUnique(userBaseDto.getUsername(), null);
        if (!Worker.isOK(dto))errorInfos.add((ErrorInfo) dto.getData());
        //password
        dto = Worker.isBlank2("password", userBaseDto.getPassword());
        if (!Worker.isOK(dto))errorInfos.add((ErrorInfo) dto.getData());
        //email
        dto = emailUnique(userBaseDto.getEmail(), null);
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        if(CollectionUtils.isNotEmpty(errorInfos)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,errorInfos);

        StringBuilder msg = new StringBuilder();
        String validCode=StringUtil.getValidCode(8).toUpperCase();
        msg.append("以下为你的邮箱验证码：").append(System.lineSeparator())
                .append(validCode);

       Boolean flag= emailService.sendHtmlEmail(EmailDto.newEmailDto()
                .subjet("Prefox邮箱验证")
                .emailTo(userBaseDto.getEmail())
                .msg(prefoxEmailTemp.buildHtmlMsg(String.format("%s，您好：",userBaseDto.getUsername()),
                        "验证码",msg.toString()))
                .build()
        );
        if(!Boolean.TRUE.equals(flag))  return new BaseResponseDTO(HttpStatus.INTERNAL_SERVER_ERROR,
                "The email failed, please try again later.");

        userBaseDto.getRequest().getSession().setAttribute(userBaseDto.getEmail(),validCode);
        return Worker.OK();
    }

    @Override
    public User findByUsernameOrEmail(String username) {
        return userDao.findFirstByUsernameOrEmail(username,username);
    }

    @Override
    public BaseResponseDTO login(LoginDto loginDto) {
        try {
            BaseResponseDTO dto=Worker.isBlank2("username",loginDto.getUsername());
            if(!Worker.isOK(dto))return dto;
            dto=Worker.isBlank2("password",loginDto.getPassword());
            if(!Worker.isOK(dto))return dto;
            UsernamePasswordToken token = new UsernamePasswordToken(loginDto.getUsername(), DigestUtils.md5Hex(loginDto
                    .getPassword()),
                    loginDto.isRememberMe());
            SecurityUtils.getSubject().login(token);
            SavedRequest savedRequest = WebUtils.getSavedRequest(loginDto.getRequest());
            // 获取保存的URL
            Object data = null;
            if (savedRequest != null && savedRequest.getRequestUrl()!=null && !savedRequest.getRequestUrl().contains
                    ("favicon.ico")) {
                data = savedRequest.getRequestUrl();
            }
            return Worker.OK(data);
        }catch (DisabledAccountException de){
            return  new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("username")
                    .HttpStatus(HttpStatus.IS_DISABLED).build());
        }catch (AccountException ae){
            return  new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,ErrorInfo.newErrorInfo().property("username")
                    .HttpStatus(HttpStatus.PARAM_INCORRECT).build());
        }

    }

    private User buildUser(UserBaseDto dto) {
        Date date = new Date();
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setPassword(DigestUtils.md5Hex(dto.getPassword()));
        user.setEmail(dto.getEmail());
        user.setCreateTime(date);
        user.setLastUpdateTime(date);
        user.setMale(true);
        user.setStatus(UserStatus.NORMAL.code());
        return user;
    }
}
