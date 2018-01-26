package com.tools.action.anon.user;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.user.LoginDto;
import com.tools.dto.user.UserBaseDto;
import com.tools.service.UserService;
import com.tools.worker.Worker;
import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.web.util.SavedRequest;
import org.apache.shiro.web.util.WebUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * Created by DT254 on 2018/1/9.
 */
@Controller
@Slf4j
@RequestMapping("/tools/anon/user")
public class UserAction {
    @Autowired
    private UserService userService;

    @PostMapping(value = "name-unique")
    @ResponseBody
    public BaseResponseDTO nameUnique(@RequestParam(value = "username", required = false) String username) {
        return userService.nameUnique(username, null);
    }

    @PostMapping(value = "email-unique")
    @ResponseBody
    public BaseResponseDTO emailUnique(@RequestParam(value = "email", required = false) String email) {
        return userService.emailUnique(email, null);
    }

    @PostMapping(value = "create")
    @ResponseBody
    public BaseResponseDTO createUser(UserBaseDto userBaseDto, HttpServletRequest request) {
        userBaseDto.setRequest(request);
        return userService.createUser(userBaseDto);
    }

    @PostMapping(value = "sendValid")
    @ResponseBody
    public BaseResponseDTO sendValid(UserBaseDto userBaseDto, HttpServletRequest request) {
        userBaseDto.setRequest(request);
        return userService.sendValid(userBaseDto);
    }

    @PostMapping(value = "sendLogin")
    @ResponseBody
    public BaseResponseDTO sendLogin(LoginDto loginDto, HttpServletRequest request)
    {
        loginDto.setRequest(request);
        return userService.login(loginDto);
    }

    @GetMapping(value = "/join")
    public ModelAndView join() {
        ModelAndView mv = new ModelAndView("user/join");
        return mv;
    }

    @RequestMapping(value = "/login")
    public ModelAndView login() {
        ModelAndView mv = new ModelAndView("user/login");
        return mv;
    }
}