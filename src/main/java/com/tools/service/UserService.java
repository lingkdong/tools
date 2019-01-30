package com.tools.service;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.user.*;
import com.tools.model.User;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by lk on 2018/1/9.
 */
public interface UserService {
    boolean _nameUnique(String name, Long userId);

    boolean _emailUnique(String email, Long userId);

    BaseResponseDTO nameUnique(String name, Long userId);

    BaseResponseDTO emailUnique(String email, Long userId);

    /**
     * user regist
     *
     * @param userBaseParam
     * @return
     */
    BaseResponseDTO createUser(UserBaseParam userBaseParam);

    /**
     * send valid to user email
     *
     * @param userBaseParam
     * @return
     */
    BaseResponseDTO sendValid(UserBaseParam userBaseParam);

    User findByUsernameOrEmail(String username);

    User findByUsername(String username);

    /**
     * user login
     *
     * @param loginParam
     * @return
     */
    BaseResponseDTO login(LoginParam loginParam);

    /**
     * regist step2.complete user profile
     *
     * @param completeDto
     * @return
     */
    BaseResponseDTO complete(CompleteDto completeDto);

    BaseResponseDTO getComplete();

    BaseResponseDTO loginOut();

    BaseResponseDTO passReset(ResetParam resetParam);

    User getUserByToken(HttpServletRequest request, String token);

    /**
     * change password
     *
     * @param
     * @return
     */
    BaseResponseDTO changePass(PassChangeParam passChangeParam);

    /**
     * get user profile
     *
     * @return
     */
    BaseResponseDTO getChange();

    /**
     * modify user profile
     *
     * @param saveChangeParam
     * @return
     */
    BaseResponseDTO change(SaveChangeParam saveChangeParam);

    /**
     * upload user avatar
     *
     * @param multipartFile
     * @return
     */
    BaseResponseDTO avatar(MultipartFile multipartFile);

    BaseResponseDTO getAvatar();

    User findOne(Long id);

}
