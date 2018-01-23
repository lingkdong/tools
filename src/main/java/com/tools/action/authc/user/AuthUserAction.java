package com.tools.action.authc.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by DT254 on 2018/1/18.
 */
@Controller
@RequestMapping("/tools/authc/user")
public class AuthUserAction {
    @GetMapping(value = "/complete")
    public ModelAndView complete() {
        ModelAndView mv=new ModelAndView("user/complete");
        return mv;
    }
}
