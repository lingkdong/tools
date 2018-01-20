package com.tools.action.user;

import com.tools.action.BaseAction;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by DT254 on 2017/8/30.
 */
@Controller
@RequestMapping("/tools/user/")
public class UserIndexAction extends BaseAction {
    @GetMapping(value = "/join")
    public ModelAndView join() {
        ModelAndView mv=new ModelAndView("user/join");
        return mv;
    }

    @GetMapping(value="/login")
    public ModelAndView login(@RequestParam(value = "returnTo", required = false) String returnTo ) {
        ModelAndView mv=new ModelAndView("user/login");
        mv.addObject("returnTo",returnTo);
        return mv;
    }
}
