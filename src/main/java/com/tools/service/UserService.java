package com.tools.service;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.user.*;
import com.tools.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
     * @param userBaseDto
     * @return
     */
    BaseResponseDTO createUser(UserBaseDto userBaseDto);

    /**
     * send valid to user email
     *
     * @param userBaseDto
     * @return
     */
    BaseResponseDTO sendValid(UserBaseDto userBaseDto);

    User findByUsernameOrEmail(String username);

    User findByUsername(String username);

    /**
     * user login
     *
     * @param loginDto
     * @return
     */
    BaseResponseDTO login(LoginDto loginDto);

    /**
     * regist step2.complete user profile
     *
     * @param completeDto
     * @return
     */
    BaseResponseDTO complete(CompleteDto completeDto);

    BaseResponseDTO getComplete();

    BaseResponseDTO loginOut();

    BaseResponseDTO passReset(ResetDto resetDto);

    User getUserByToken(HttpServletRequest request, String token);

    /**
     * change password
     *
     * @param passChangeDto
     * @return
     */
    BaseResponseDTO changePass(PassChangeDto passChangeDto);

    /**
     * get user profile
     *
     * @return
     */
    BaseResponseDTO getChange();

    /**
     * modify user profile
     *
     * @param saveChangeDto
     * @return
     */
    BaseResponseDTO change(SaveChangeDto saveChangeDto);

    /**
     * upload user avatar
     *
     * @param multipartFile
     * @return
     */
    BaseResponseDTO avatar(MultipartFile multipartFile);

    BaseResponseDTO getAvatar();

}
