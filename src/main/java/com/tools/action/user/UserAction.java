package com.tools.action.user;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.user.UserBaseDto;
import com.tools.service.UserService;
import com.tools.utils.MapUtil;
import com.tools.worker.Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by DT254 on 2018/1/9.
 */
@RestController
@RequestMapping("/tools")
public class UserAction {
    @Autowired
    private UserService userService;

    @GetMapping(value = "name-unique")
    public BaseResponseDTO nameUnique(@RequestParam(value = "username", required = false) String username) {
        return userService.nameUnique(username, null);
    }

    @GetMapping(value = "email-unique")
    public BaseResponseDTO emailUnique(@RequestParam(value = "email", required = false) String email) {
        return userService.emailUnique(email, null);
    }

    public BaseResponseDTO createUser(UserBaseDto userBaseDto) {
        return userService.createUser(userBaseDto);
    }
}
