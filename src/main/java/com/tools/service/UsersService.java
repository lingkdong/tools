package com.tools.service;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.user.FindUsersDto;
import com.tools.dto.user.UsersDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @Author: dongxin
 * @Description:
 * @Date: 2018/5/28 16:57
 **/
public interface UsersService {
    Page<UsersDto> findUsersDto(FindUsersDto findUsersDto, Pageable pageable);

    BaseResponseDTO findUsersDto(String name);
}
