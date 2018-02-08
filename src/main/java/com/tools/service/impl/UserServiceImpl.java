package com.tools.service.impl;

import com.tools.dao.UserDao;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.EmailDto;
import com.tools.dto.ErrorInfo;
import com.tools.dto.HttpStatus;
import com.tools.dto.user.*;
import com.tools.model.User;
import com.tools.model.UserStatus;
import com.tools.service.EmailService;
import com.tools.service.UserService;
import com.tools.utils.BeanUtil;
import com.tools.utils.PrefoxEmailTemp;
import com.tools.utils.RegUtils;
import com.tools.utils.StringUtil;
import com.tools.worker.SessionWorker;
import com.tools.worker.Worker;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AccountException;
import org.apache.shiro.authc.DisabledAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.web.util.SavedRequest;
import org.apache.shiro.web.util.WebUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
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
        if (!this._nameUnique(name, null)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo
                ().property(property).HttpStatus(HttpStatus.ALREADY_EXIT).build());
        return Worker.OK();
    }

    @Override
    public BaseResponseDTO emailUnique(String email, Long userId) {
        String property = "email";
        BaseResponseDTO dto = Worker.isEmail(email);
        if (!Worker.isOK(dto)) return dto;
        if (!this._emailUnique(email, null))
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo
                    ().property(property).HttpStatus(HttpStatus.ALREADY_EXIT).build());
        return Worker.OK();
    }

    @Override
    public BaseResponseDTO createUser(UserBaseDto userBaseDto) {
        List<ErrorInfo> errorInfos = new ArrayList<>();
        //username
        BaseResponseDTO dto = nameUnique(userBaseDto.getUsername(), null);
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //password
        dto = Worker.isBlank2("password", userBaseDto.getPassword());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //email
        dto = emailUnique(userBaseDto.getEmail(), null);
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //validCode
        dto = Worker.isBlank2("validCode", userBaseDto.getValidCode());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        if (CollectionUtils.isNotEmpty(errorInfos)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, errorInfos);

        //comapre valid code with session
        HttpSession session = userBaseDto.getRequest().getSession();
        String code = (String) session.getAttribute(userBaseDto.getEmail());
        if (code == null) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("validCode")
                    .HttpStatus(HttpStatus.IS_EXPIRED).build());
        }
        if (!userBaseDto.getValidCode().equalsIgnoreCase(code))
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("validCode")
                    .HttpStatus(HttpStatus
                            .PARAM_INCORRECT).build());
        //save
        userDao.save(buildUser(userBaseDto));
        session.removeAttribute(userBaseDto.getEmail());
        //login
        login(LoginDto.newLoginDto().username(userBaseDto.getUsername()).password(userBaseDto.getPassword()).request
                (userBaseDto.getRequest()).build());
        //auto login by username;
        return Worker.OK();
    }

    @Override
    public BaseResponseDTO sendValid(UserBaseDto userBaseDto) {
        List<ErrorInfo> errorInfos = new ArrayList<>();
        //username
        BaseResponseDTO dto = nameUnique(userBaseDto.getUsername(), null);
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //password
        dto = Worker.isBlank2("password", userBaseDto.getPassword());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //email
        dto = emailUnique(userBaseDto.getEmail(), null);
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        if (CollectionUtils.isNotEmpty(errorInfos)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, errorInfos);

        StringBuilder msg = new StringBuilder();
        String validCode = StringUtil.getValidCode(8).toUpperCase();
        msg.append("以下为您的邮箱验证码：").append(System.lineSeparator())
                .append(validCode);

        Boolean flag = emailService.sendHtmlEmail(EmailDto.newEmailDto()
                .subjet("Prefox邮箱验证")
                .emailTo(userBaseDto.getEmail())
                .msg(prefoxEmailTemp.buildHtmlMsg(String.format("%s，您好：", userBaseDto.getUsername()),
                        "验证码", msg.toString()))
                .build()
        );
        if (!Boolean.TRUE.equals(flag)) return new BaseResponseDTO(HttpStatus.INTERNAL_SERVER_ERROR,
                "The email failed, please try again later.");

        userBaseDto.getRequest().getSession().setAttribute(userBaseDto.getEmail(), validCode);
        return Worker.OK();
    }

    @Override
    public User findByUsernameOrEmail(String username) {
        return userDao.findFirstByUsernameOrEmail(username, username);
    }

    @Override
    public User findByUsername(String username) {
        return userDao.findFirstByUsername(username);
    }

    @Override
    public BaseResponseDTO login(LoginDto loginDto) {
        try {
            BaseResponseDTO dto = Worker.isBlank2("username", loginDto.getUsername());
            if (!Worker.isOK(dto)) return dto;
            dto = Worker.isBlank2("password", loginDto.getPassword());
            if (!Worker.isOK(dto)) return dto;
            UsernamePasswordToken token = new UsernamePasswordToken(loginDto.getUsername(), DigestUtils.md5Hex(loginDto
                    .getPassword()),
                    loginDto.isRememberMe());
            SecurityUtils.getSubject().login(token);
            SavedRequest savedRequest = WebUtils.getSavedRequest(loginDto.getRequest());
            // 获取保存的URL
            Object data = null;
            if (savedRequest != null && savedRequest.getRequestUrl() != null && !savedRequest.getRequestUrl().contains
                    ("favicon.ico")) {
                data = savedRequest.getRequestUrl();
            }
            return Worker.OK(data);
        } catch (DisabledAccountException de) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("username")
                    .HttpStatus(HttpStatus.IS_DISABLED).build());
        } catch (AccountException ae) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("username")
                    .HttpStatus(HttpStatus.PARAM_INCORRECT).build());
        }

    }

    @Override
    public BaseResponseDTO complete(CompleteDto completeDto) {
        List<ErrorInfo> errorInfos = new ArrayList<>();
        //trueName
        BaseResponseDTO dto = Worker.isBlank2("trueName", completeDto.getTrueName());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //birthDay
        dto = Worker.isNull("birthday", completeDto.getBirthday());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //male
        dto = Worker.isNull("male", completeDto.getMale());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //skillTag
        dto = Worker.isBlank2("skillTag", completeDto.getSkillTag());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //phone can blank but valid format
        if (StringUtils.isNotBlank(completeDto.getPhone())) {
            if (!RegUtils.isPhone(completeDto.getPhone())) errorInfos.add(ErrorInfo
                    .newErrorInfo().property("phone").HttpStatus(HttpStatus.INVALID_FORMAT).build());
        }
        if (CollectionUtils.isNotEmpty(errorInfos)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, errorInfos);
        //获取当前用户
        User sessionUser = Worker.getCurrentUser();
        if (sessionUser == null) return new BaseResponseDTO(HttpStatus.LOGIN_EXPIRED);
        User user = userDao.findOne(sessionUser.getId());
        if (user == null) return new BaseResponseDTO(HttpStatus.LOGIN_EXPIRED);
        if (BeanUtil.compareAndModify(user, completeDto)) {
            userDao.save(user);
            //update sessionUser
            BeanUtil.compareAndModify(sessionUser, completeDto);
        }
        return Worker.OK();
    }

    @Override
    public BaseResponseDTO getComplete() {
        //获取当前用户
        User sessionUser = Worker.getCurrentUser();
        if (sessionUser == null) return new BaseResponseDTO(HttpStatus.LOGIN_EXPIRED);
        User user = userDao.findOne(sessionUser.getId());
        if (user == null) return new BaseResponseDTO(HttpStatus.LOGIN_EXPIRED);
        CompleteDto completeDto = new CompleteDto();
        BeanUtil.copy(completeDto, user);
        return Worker.OK(completeDto);
    }

    @Override
    public BaseResponseDTO loginOut() {
        SecurityUtils.getSubject().logout();
        return Worker.OK();
    }

    @Override
    public BaseResponseDTO passReset(ResetDto resetDto) {
        HttpSession session = resetDto.getRequest().getSession();
        String property = "email";
        BaseResponseDTO dto = Worker.isEmail(resetDto.getEmail());
        if (!Worker.isOK(dto)) return dto;
        User user = userDao.findFirstByEmail(resetDto.getEmail());
        if (user == null) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo
                    ().property(property).HttpStatus(HttpStatus.USER_NOT_EXIST).build());
        }
        StringBuilder msg = new StringBuilder();
        StringBuilder token = new StringBuilder()
                .append(DigestUtils.md5Hex(StringUtil.getPassword(16)))
                .append(DigestUtils.md5Hex(StringUtil.getPassword(16)))
                .append(DigestUtils.md5Hex(StringUtil.getPassword(16)))
                .append(DigestUtils.md5Hex(StringUtil.getPassword(16)));
        msg.append("以下为您的密码重置链接：").append(System.lineSeparator())
                .append
                        ("<a href=\"" + PrefoxEmailTemp.CHANGE_PASS_URL + token + "\" target=\"_blank\">")
                .append(PrefoxEmailTemp.CHANGE_PASS_URL + token).append("</a>")
                .append(System.lineSeparator())
                .append("链接有效期为1小时。若链接已过期，获得新的密码重置连接，请访问 ")
                .append("<a href=\"" + PrefoxEmailTemp.RESET_PASS_URL + "\" target=\"_blank\">")
                .append(PrefoxEmailTemp.RESET_PASS_URL).append("</a>");
        ;
        Boolean flag = emailService.sendHtmlEmail(EmailDto.newEmailDto()
                .subjet("Prefox密码重置")
                .emailTo(resetDto.getEmail())
                .msg(prefoxEmailTemp.buildHtmlMsg(String.format("%s，您好：", user.getUsername()),
                        "密码重置链接", msg.toString()))
                .build()
        );
        if (!Boolean.TRUE.equals(flag)) return new BaseResponseDTO(HttpStatus.INTERNAL_SERVER_ERROR,
                "The email failed, please try again later.");
        SessionWorker.setInterval(session, SessionWorker.HOUR_1);
        session.setAttribute(token.toString(), user.getUsername());
        return Worker.OK();
    }

    @Override
    public User getUserByToken(HttpServletRequest request, String token) {
        if (StringUtils.isNotBlank(token)) {
            String username = (String) request.getSession().getAttribute(token);
            if (StringUtils.isNotBlank(username)) {
                return userDao.findFirstByUsername(username);
            }
        }
        return null;
    }

    @Override
    public BaseResponseDTO changePass(PassChangeDto passChangeDto) {
        User user = getUserByToken(passChangeDto.getRequest(), passChangeDto.getToken());
        if (user == null) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property
                ("token").HttpStatus(HttpStatus.PARAM_INCORRECT).build());
        BaseResponseDTO dto = Worker.isBlank2("password", passChangeDto.getPassword());
        if (!Worker.isOK(dto)) return dto;
        user.setPassword(DigestUtils.md5Hex(passChangeDto.getPassword()));
        user.setLastUpdateTime(new Date());
        userDao.save(user);
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
        user.setMale(true);
        user.setStatus(UserStatus.NORMAL.code());
        return user;
    }

    @Override
    public Page<UsersDto> findUsersDto(FindUsersDto findUsersDto, Pageable pageable) {
        Page users = findUsers(findUsersDto,pageable);
        if(pageable.getPageNumber()>=users.getTotalPages()){
            pageable=new PageRequest(users.getTotalPages()-1,pageable.getPageSize(),pageable.getSort());
            users = findUsers(findUsersDto,pageable);
        }
        if (users.hasContent()) {
            List<UsersDto> usersDtos = new ArrayList<>();
            for (User item : (List<User>) users.getContent()) {
                usersDtos.add(BeanUtil.cast(UsersDto.class, item));
            }
            Page<UsersDto> result = new PageImpl<>(usersDtos, new PageRequest(users.getNumber(), users.getSize
                    ()), users.getTotalElements());
            return result;
        }
        return users;
    }

    private  Page<User> findUsers(FindUsersDto findUsersDto, Pageable pageable){
        return (StringUtils.isBlank(findUsersDto.getUsername())) ? userDao.findAllByOrderByScoreDesc(pageable) : userDao
                .findByUsernameContainingOrderByScoreDesc(findUsersDto.getUsername(), pageable);
    }
}
