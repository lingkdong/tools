package com.tools.action.format.anon;

import com.tools.action.BaseAction;
import com.tools.service.AscIIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by lk on 2018/4/26.
 */
@Controller
@RequestMapping("/anon/ascII")
public class AscIIAction extends BaseAction {
    @Autowired
    private AscIIService ascIIService;
    @GetMapping(value="/{type}/index")
    public ModelAndView index(@PathVariable(value = "type") String type) {
        return getResource(type,"ascII/"+type);
    }
    @PostMapping(value="/get-ascII")
    @ResponseBody
    public Object betweenDate(Character character){
        return ascIIService.CharToAscII(character);
    }
}
