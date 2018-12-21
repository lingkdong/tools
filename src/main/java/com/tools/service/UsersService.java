package com.tools.service;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.user.FindUsersParam;
import com.tools.dto.user.UsersDto;
import com.tools.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * @Author: dongxin
 * @Description:
 * @Date: 2018/5/28 16:57
 **/
public interface UsersService {
    Page<UsersDto> findUsersDto(FindUsersParam findUsersParam, Pageable pageable);

    BaseResponseDTO findUsersDto(String name);

    UsersDto toDto(User user);

    List<User> findAllByIdIn(Set<Long> userIds);

    Map<Long,User> toIdMap(List<User> users);
}
