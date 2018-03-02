package com.tools.action.anon.user;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.user.LoginDto;
import com.tools.dto.user.PassChangeDto;
import com.tools.dto.user.ResetDto;
import com.tools.dto.user.UserBaseDto;
import com.tools.model.User;
import com.tools.service.UserService;
import com.tools.worker.Worker;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.web.util.SavedRequest;
import org.apache.shiro.web.util.WebUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * Created by lk on 2018/1/9.
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

    @PostMapping(value = "send-valid")
    @ResponseBody
    public BaseResponseDTO sendValid(UserBaseDto userBaseDto, HttpServletRequest request) {
        userBaseDto.setRequest(request);
        return userService.sendValid(userBaseDto);
    }

    @PostMapping(value = "send-login")
    @ResponseBody
    public BaseResponseDTO sendLogin(LoginDto loginDto, HttpServletRequest request) {
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

    @PostMapping(value = "login-out")
    @ResponseBody
    public BaseResponseDTO loginOut() {
        return userService.loginOut();
    }

    @RequestMapping(value = "/password-reset")
    public ModelAndView passReset() {
        ModelAndView mv = new ModelAndView("user/password-reset");
        return mv;
    }

    @PostMapping(value = "send-password-reset")
    @ResponseBody
    public BaseResponseDTO sendReset(ResetDto resetDto,HttpServletRequest request) {
        resetDto.setRequest(request);
        return userService.passReset(resetDto);
    }

    @RequestMapping(value = "/password-change/{token}")
    public ModelAndView passChange(@PathVariable(name = "token") String token,HttpServletRequest request) {
        ModelAndView mv = new ModelAndView("user/password-change");
        boolean isValid=false;
        try {
            User user=userService.getUserByToken(request,token);
             if(user!=null){
                 isValid=true;
                 mv.addObject("username",user.getUsername());
             }
        }catch (Exception e){
           isValid=false;
        }
        mv.addObject("isValid",isValid);
        mv.addObject("token",token);
        return mv;
    }

    @PostMapping(value = "send-password-change")
    @ResponseBody
    public BaseResponseDTO sendChangePass(PassChangeDto passChangeDto,HttpServletRequest request) {
        passChangeDto.setRequest(request);
        return  userService.changePass(passChangeDto);
    }



}
