package com.tools.action.user;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.user.LoginDto;
import com.tools.dto.user.UserBaseDto;
import com.tools.service.UserService;
import com.tools.worker.Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by DT254 on 2018/1/9.
 */
@RestController
@RequestMapping("/tools/user")
public class UserAction {
    @Autowired
    private UserService userService;

    @PostMapping(value = "name-unique")
    public BaseResponseDTO nameUnique(@RequestParam(value = "username", required = false) String username) {
        return userService.nameUnique(username, null);
    }

    @PostMapping(value = "email-unique")
    public BaseResponseDTO emailUnique(@RequestParam(value = "email", required = false) String email) {
        return userService.emailUnique(email, null);
    }
    @PostMapping(value = "create")
    public BaseResponseDTO createUser(UserBaseDto userBaseDto, HttpServletRequest request) {
        userBaseDto.setRequest(request);
        return userService.createUser(userBaseDto);
    }

    @PostMapping(value = "sendValid")
    public BaseResponseDTO sendValid(UserBaseDto userBaseDto,HttpServletRequest request){
        userBaseDto.setRequest(request);
        return userService.sendValid(userBaseDto);
    }

    @PostMapping (value = "sendLogin")
    public BaseResponseDTO sendLogin(LoginDto loginDto){
        System.out.println(1);
       return Worker.OK();
    }

}
