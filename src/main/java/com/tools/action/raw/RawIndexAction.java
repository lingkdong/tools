package com.tools.action.raw;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by DT254 on 2017/11/22.
 */
@Controller
@RequestMapping("/tools")
public class RawIndexAction {
    @GetMapping(value = "/raw")
    public ModelAndView index(@RequestParam(value = "version", required = false) String version,HttpServletRequest request) {
        ModelAndView mv=new ModelAndView("rawPage");
        mv.addObject("v",request.getSession().getAttribute(version));
        mv.addObject("version",version);
        return mv;
    }
}
