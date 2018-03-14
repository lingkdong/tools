package com.tools.action.anon.open;
import com.tools.utils.MathUtils;
import com.tools.utils.TimeUtils;
import com.tools.worker.SessionWorker;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by lk on 2017/11/21.
 */
@Controller
@RequestMapping("/anon/open")
public class OpenAction {
    @PostMapping(value = "/store")
    @ResponseBody
    public String open(
            HttpServletRequest request,
            @RequestParam(value = "v", required = false) String value,
            @RequestParam(value = "type", required = false) String type
    ) {
        String version=TimeUtils.format(new Date(),TimeUtils.yyyyMMddHHmmssSSS)+ MathUtils.getRandom(6);
        Map<String,Object> obj=new HashMap<>();
        obj.put("value",value);
        obj.put("type",type);
        SessionWorker.setInterval(request.getSession(),SessionWorker.HOUR_1).setAttribute(version,obj);
        return version;
    }
    @GetMapping(value = "/show")
    public ModelAndView index(@RequestParam(value = "version", required = false) String version, HttpServletRequest request) {
        ModelAndView mv=new ModelAndView("open");
        Map<String,Object> obj= (Map<String, Object>) request.getSession().getAttribute(version);
        if(obj!=null){
            mv.addObject("value",(obj.get("value")==null)?"":obj.get("value"));
            mv.addObject("type",(obj.get("type")==null)?"":obj.get("type"));
            mv.addObject("version",version);
        }
        return mv;
    }
}
