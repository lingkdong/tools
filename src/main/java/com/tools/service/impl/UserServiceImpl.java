package com.tools.service.impl;

import com.tools.constants.UserType;
import com.tools.dao.JdbcDao;
import com.tools.dao.UserDao;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.EmailDto;
import com.tools.dto.ErrorInfo;
import com.tools.dto.HttpStatus;
import com.tools.dto.user.*;
import com.tools.model.User;
import com.tools.constants.UserStatus;
import com.tools.service.EmailService;
import com.tools.service.FileService;
import com.tools.service.UserService;
import com.tools.utils.*;
import com.tools.worker.SessionWorker;
import com.tools.worker.Worker;
import lombok.extern.slf4j.Slf4j;
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
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.util.*;

import static com.tools.utils.AvatarConstant.*;

/**
 * Created by lk on 2018/1/9.
 */
@Service
@Slf4j
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;
    @Autowired
    private EmailService emailService;
    @Autowired
    private PrefoxEmailTemp prefoxEmailTemp;
    @Autowired
    private FileService fileService;
    @Value("${prefox.nginx}")
    private String nginxUrl;
    @Autowired
    private JdbcDao jdbcDao;

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
    public BaseResponseDTO createUser(UserBaseParam userBaseParam) {
        List<ErrorInfo> errorInfos = new ArrayList<>();
        //username
        BaseResponseDTO dto = nameUnique(userBaseParam.getUsername(), null);
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //password
        dto = Worker.isBlank2("password", userBaseParam.getPassword());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //email
        dto = emailUnique(userBaseParam.getEmail(), null);
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //validCode
        dto = Worker.isBlank2("validCode", userBaseParam.getValidCode());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        if (CollectionUtils.isNotEmpty(errorInfos)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, errorInfos);

        //comapre valid code with session
        HttpSession session = userBaseParam.getRequest().getSession();
        String code = (String) session.getAttribute(userBaseParam.getEmail());
        if (code == null) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("validCode")
                    .HttpStatus(HttpStatus.IS_EXPIRED).build());
        }
        if (!userBaseParam.getValidCode().equalsIgnoreCase(code))
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("validCode")
                    .HttpStatus(HttpStatus
                            .PARAM_INCORRECT).build());
        //save
        userDao.save(buildUser(userBaseParam));
        session.removeAttribute(userBaseParam.getEmail());
        //login
        login(LoginParam.newLoginParam().username(userBaseParam.getUsername()).password(userBaseParam.getPassword()).request
                (userBaseParam.getRequest()).build());
        //auto login by username;
        return Worker.OK();
    }

    @Override
    public BaseResponseDTO sendValid(UserBaseParam userBaseParam) {
        List<ErrorInfo> errorInfos = new ArrayList<>();
        //username
        BaseResponseDTO dto = nameUnique(userBaseParam.getUsername(), null);
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //password
        dto = Worker.isBlank2("password", userBaseParam.getPassword());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //email
        dto = emailUnique(userBaseParam.getEmail(), null);
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        if (CollectionUtils.isNotEmpty(errorInfos)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, errorInfos);

        StringBuilder msg = new StringBuilder();
        String validCode = StringUtil.getValidCode(8).toUpperCase();
        msg.append("以下为您的邮箱验证码：").append(System.lineSeparator())
                .append(validCode);

        Boolean flag = emailService.sendHtmlEmail(EmailDto.newEmailDto()
                .subjet("Prefox邮箱验证")
                .emailTo(userBaseParam.getEmail())
                .msg(prefoxEmailTemp.buildHtmlMsg(String.format("%s，您好：", userBaseParam.getUsername()),
                        "验证码", msg.toString()))
                .build()
        );
        if (!Boolean.TRUE.equals(flag)) return new BaseResponseDTO(HttpStatus.INTERNAL_SERVER_ERROR,
                "The email failed, please try again later.");

        userBaseParam.getRequest().getSession().setAttribute(userBaseParam.getEmail(), validCode);
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
    public BaseResponseDTO login(LoginParam loginParam) {
        try {
            BaseResponseDTO dto = Worker.isBlank2("username", loginParam.getUsername());
            if (!Worker.isOK(dto)) return dto;
            dto = Worker.isBlank2("password", loginParam.getPassword());
            if (!Worker.isOK(dto)) return dto;
            UsernamePasswordToken token = new UsernamePasswordToken(loginParam.getUsername(), DigestUtils.md5Hex(loginParam
                    .getPassword()),
                    loginParam.isRememberMe());
            SecurityUtils.getSubject().login(token);
            SavedRequest savedRequest = WebUtils.getSavedRequest(loginParam.getRequest());
            // 获取保存的URL
            Object data = null;
            if (savedRequest != null && savedRequest.getRequestUrl() != null && !savedRequest.getRequestUrl().contains
                    ("favicon.ico")) {
                data = savedRequest.getRequestUrl();
            }
            if(Worker.getCurrentUser()!=null){
                //login success add score
                addScore(Worker.getCurrentUser().getId(),1);
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
        //can blank ,but length need<250
        if (StringUtils.isNotBlank(completeDto.getBio())) {
            if (completeDto.getBio().length() > 250) {
                completeDto.setBio(completeDto.getBio().substring(0, 250));
            }
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
        return Worker.OK(user.getUsername());
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
        completeDto.setPicture(getLargeAvatar(completeDto.getPicture()));
        return Worker.OK(completeDto);
    }

    @Override
    public BaseResponseDTO loginOut() {
        SecurityUtils.getSubject().logout();
        return Worker.OK();
    }

    @Override
    public BaseResponseDTO passReset(ResetParam resetParam) {
        HttpSession session = resetParam.getRequest().getSession();
        String property = "email";
        BaseResponseDTO dto = Worker.isEmail(resetParam.getEmail());
        if (!Worker.isOK(dto)) return dto;
        User user = userDao.findFirstByEmail(resetParam.getEmail());
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
        msg.append("我们收到了对账户").append(user.getEmail()).append("的密码重置请求。")
                .append(System.lineSeparator())
                .append("若您发起了此请求，")
                .append(
                        "<a href=\"" + PrefoxEmailTemp.CHANGE_PASS_URL + token + "\" target=\"_blank\">")
                .append("请点击这里进行密码重置").append("</a>")
                .append(System.lineSeparator())
                .append("链接有效期为1小时。若链接已过期，")
                .append("<a href=\"" + PrefoxEmailTemp.RESET_PASS_URL + "\" target=\"_blank\">")
                .append("获得新的重置连接").append("</a>");
        ;
        Boolean flag = emailService.sendHtmlEmail(EmailDto.newEmailDto()
                .subjet("Prefox密码重置")
                .emailTo(resetParam.getEmail())
                .msg(prefoxEmailTemp.buildHtmlMsg(String.format("%s，您好：", user.getUsername()),
                        "密码重置", msg.toString()))
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
    public BaseResponseDTO changePass(PassChangeParam passChangeParam) {
        User user = getUserByToken(passChangeParam.getRequest(), passChangeParam.getToken());
        if (user == null) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property
                ("token").HttpStatus(HttpStatus.PARAM_INCORRECT).build());
        BaseResponseDTO dto = Worker.isBlank2("password", passChangeParam.getPassword());
        if (!Worker.isOK(dto)) return dto;
        user.setPassword(DigestUtils.md5Hex(passChangeParam.getPassword()));
        user.setLastUpdateTime(new Date());
        userDao.save(user);
        return Worker.OK();
    }

    private User buildUser(UserBaseParam dto) {
        Date date = new Date();
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setPassword(DigestUtils.md5Hex(dto.getPassword()));
        user.setEmail(dto.getEmail());
        user.setCreateTime(date);
        user.setLastUpdateTime(date);
        user.setMale(true);
        user.setStatus(UserStatus.NORMAL.code());
        user.setType(UserType.NORMAL.code());
        return user;
    }

    @Override
    public BaseResponseDTO getChange() {
        //获取当前用户
        User sessionUser = Worker.getCurrentUser();
        if (sessionUser == null) return new BaseResponseDTO(HttpStatus.LOGIN_EXPIRED);
        User user = userDao.findOne(sessionUser.getId());
        if (user == null) return new BaseResponseDTO(HttpStatus.LOGIN_EXPIRED);
        ViewChangeDto changeDto = new ViewChangeDto();
        BeanUtil.copy(changeDto, user);
        changeDto.setPicture(getLargeAvatar(changeDto.getPicture()));
        return Worker.OK(changeDto);
    }

    @Override
    public BaseResponseDTO change(SaveChangeParam saveChangeParam) {
        List<ErrorInfo> errorInfos = new ArrayList<>();
        //trueName
        BaseResponseDTO dto = Worker.isBlank2("trueName", saveChangeParam.getTrueName());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //birthDay
        dto = Worker.isNull("birthday", saveChangeParam.getBirthday());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //male
        dto = Worker.isNull("male", saveChangeParam.getMale());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //skillTag
        dto = Worker.isBlank2("skillTag", saveChangeParam.getSkillTag());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        //phone can blank but valid format
        if (StringUtils.isNotBlank(saveChangeParam.getPhone())) {
            if (!RegUtils.isPhone(saveChangeParam.getPhone())) errorInfos.add(ErrorInfo
                    .newErrorInfo().property("phone").HttpStatus(HttpStatus.INVALID_FORMAT).build());
        }
        //can blank ,but length need<250
        if (StringUtils.isNotBlank(saveChangeParam.getBio())) {
            if (saveChangeParam.getBio().length() > 250) {
                saveChangeParam.setBio(saveChangeParam.getBio().substring(0, 250));
            }
        }
        if (CollectionUtils.isNotEmpty(errorInfos)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, errorInfos);
        //获取当前用户
        User sessionUser = Worker.getCurrentUser();
        if (sessionUser == null) return new BaseResponseDTO(HttpStatus.LOGIN_EXPIRED);
        User user = userDao.findOne(sessionUser.getId());
        if (user == null) return new BaseResponseDTO(HttpStatus.LOGIN_EXPIRED);
        if (BeanUtil.compareAndModify(user, saveChangeParam)) {
            userDao.save(user);
            //update sessionUser
            BeanUtil.compareAndModify(sessionUser, saveChangeParam);
        }
        Map map = new HashMap();
        if (StringUtils.isNotBlank(user.getPicture())) {
            map.put("largeImg", getLargeAvatar(user.getPicture()));
        }

        return Worker.OK(map);
    }

    @Override
    public BaseResponseDTO avatar(MultipartFile file) {
        String type = FileUtil.getNameSuffix(file.getOriginalFilename()).toLowerCase();
        if (!(AVATAR_TYPE.contains(type))) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("avatar")
                    .HttpStatus(HttpStatus.INVALID_FORMAT).build());
        }
        User sessionUser = Worker.getCurrentUser();
        if (sessionUser == null) return new BaseResponseDTO(HttpStatus.LOGIN_EXPIRED);
        String avatarDir = getAvatarDir(sessionUser.getId(), sessionUser.getUsername());
        File orig = FileUtil.uploadFile(file, fileService.getUploadBase() + File.separator + avatarDir, Constant.AVATAR + type);
        if (orig == null) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("avatar")
                    .HttpStatus(HttpStatus.FILE_UPLOAD_ERROR).build());
        }
        String token = "_" + MathUtils.getRandom(6);
        File largeFile = ImgUtil.doCompress(orig.getAbsolutePath(), large, large, token + large_flag, false);
        //compress
        File smallFile = ImgUtil.doCompress(orig.getAbsolutePath(), small, small, token + small_flag, false);
        if (largeFile == null || smallFile == null) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("avatar")
                    .HttpStatus(HttpStatus.FILE_UPLOAD_ERROR).build());
        }
        orig.delete();
        //delete pre avatar
        FileUtil.deleteFilesExcept(fileService.getUploadBase() + File.separator + avatarDir, Arrays.asList(largeFile.getName().toLowerCase(), smallFile.getName()
                .toLowerCase()));
        String avatarPath = avatarDir + File.separator + smallFile.getName();
        return Worker.OK(avatarPath);
    }

    @Override
    public BaseResponseDTO getAvatar() {
        User sessionUser = Worker.getCurrentUser();
        if (sessionUser == null) return new BaseResponseDTO(HttpStatus.LOGIN_EXPIRED);
        if (StringUtils.isNotBlank(sessionUser.getPicture())) {
            return Worker.OK(nginxUrl + sessionUser.getPicture());
        }
        return Worker.OK();
    }

    public User findOne(Long id) {
        return userDao.findOne(id);
    }

    public int addScore(Long userId, int addScore) {
        try {
            return jdbcDao.addScore(userId, addScore);
        } catch (Exception e) {
            log.error("<UserServiceImpl.addScore failed,userId:{},addScore={} {} {}  >", userId, addScore
                    , e, e.getStackTrace()[0].toString());
        }
        return 0;
    }
}
