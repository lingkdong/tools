package com.tools.action.anon.user;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.user.LoginParam;
import com.tools.dto.user.PassChangeParam;
import com.tools.dto.user.ResetParam;
import com.tools.dto.user.UserBaseParam;
import com.tools.model.User;
import com.tools.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by lk on 2018/1/9.
 */
@Controller
@Slf4j
@RequestMapping("/anon/user")
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
    public BaseResponseDTO createUser(UserBaseParam userBaseParam, HttpServletRequest request) {
        userBaseParam.setRequest(request);
        return userService.createUser(userBaseParam);
    }

    @PostMapping(value = "send-valid")
    @ResponseBody
    public BaseResponseDTO sendValid(UserBaseParam userBaseParam, HttpServletRequest request) {
        userBaseParam.setRequest(request);
        return userService.sendValid(userBaseParam);
    }

    @PostMapping(value = "send-login")
    @ResponseBody
    public BaseResponseDTO sendLogin(LoginParam loginParam, HttpServletRequest request) {
        loginParam.setRequest(request);
        return userService.login(loginParam);
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
    public BaseResponseDTO sendReset(ResetParam resetParam, HttpServletRequest request) {
        resetParam.setRequest(request);
        return userService.passReset(resetParam);
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
    public BaseResponseDTO sendChangePass(PassChangeParam passChangeParam, HttpServletRequest request) {
        passChangeParam.setRequest(request);
        return  userService.changePass(passChangeParam);
    }



}
