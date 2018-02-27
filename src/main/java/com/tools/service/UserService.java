package com.tools.service;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.user.*;
import com.tools.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.servlet.http.HttpServletRequest;

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

    User findByUsername(String username);

    BaseResponseDTO login(LoginDto loginDto);

    BaseResponseDTO complete(CompleteDto completeDto);

    BaseResponseDTO getComplete();

    BaseResponseDTO loginOut();

    BaseResponseDTO passReset(ResetDto resetDto);

    User getUserByToken(HttpServletRequest request,String token);

    BaseResponseDTO changePass(PassChangeDto passChangeDto);

    Page<UsersDto> findUsersDto(FindUsersDto findUsersDto, Pageable pageable);

    BaseResponseDTO getChange();

    BaseResponseDTO change(SaveChangeDto saveChangeDto);
}
