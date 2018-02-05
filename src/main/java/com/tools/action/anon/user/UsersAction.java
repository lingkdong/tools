package com.tools.action.anon.user;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by DT254 on 2018/2/5.
 */
@Controller
@Slf4j
@RequestMapping("/tools/anon/users")
public class UsersAction {
    @RequestMapping(value = "/index")
    public ModelAndView index() {
        ModelAndView mv = new ModelAndView("user/users");
        return mv;
    }

}
