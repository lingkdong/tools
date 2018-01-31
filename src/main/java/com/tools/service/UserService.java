package com.tools.service;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.user.CompleteDto;
import com.tools.dto.user.LoginDto;
import com.tools.dto.user.ResetDto;
import com.tools.dto.user.UserBaseDto;
import com.tools.model.User;

/**
 * Created by DT254 on 2018/1/9.
 */
public interface UserService {
    boolean _nameUnique(String name, Long userId);

    boolean _emailUnique(String email, Long userId);

    BaseResponseDTO nameUnique(String name, Long userId);

    BaseResponseDTO emailUnique(String email, Long userId);

    BaseResponseDTO createUser(UserBaseDto userBaseDto);

    BaseResponseDTO sendValid(UserBaseDto userBaseDto);

    User findByUsernameOrEmail(String username);

    BaseResponseDTO login(LoginDto loginDto);

    BaseResponseDTO complete(CompleteDto completeDto);

    BaseResponseDTO getComplete();

    BaseResponseDTO loginOut();

    BaseResponseDTO passReset(ResetDto resetDto);

}
