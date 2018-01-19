package com.tools.action.authorization.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by DT254 on 2018/1/18.
 */
@Controller
@RequestMapping("/tools/authorization/user")
public class AuthUserIndexAction {
    @GetMapping(value = "/complete")
    public ModelAndView complete() {
        ModelAndView mv=new ModelAndView("complete");
        return mv;
    }
}
