package com.tools.action.raw;

import org.apache.commons.collections.MapUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * Created by DT254 on 2017/11/22.
 */
@Controller
@RequestMapping("/tools")
public class RawIndexAction {
    @GetMapping(value = "/raw")
    public ModelAndView index(@RequestParam(value = "version", required = false) String version,HttpServletRequest request) {
        ModelAndView mv=new ModelAndView("rawPage");
        Map<String,Object> obj= (Map<String, Object>) request.getSession().getAttribute(version);
        if(obj!=null){
            mv.addObject("value",(obj.get("value")==null)?"":obj.get("value"));
            mv.addObject("type",(obj.get("type")==null)?"":obj.get("type"));
            mv.addObject("version",version);
        }
        return mv;
    }
}
