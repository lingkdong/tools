package com.tools.service;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.user.UserBaseDto;

/**
 * Created by DT254 on 2018/1/9.
 */
public interface UserService {
    boolean _nameUnique(String name, Long userId);

    boolean _emailUnique(String email, Long userId);

    BaseResponseDTO nameUnique(String name, Long userId);

    BaseResponseDTO emailUnique(String email, Long userId);

    BaseResponseDTO createUser(UserBaseDto userBaseDto);


}
