package com.tools.action.format.anon;

import com.tools.action.BaseAction;
import com.tools.dto.DateCalculateDto;
import com.tools.service.DateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by lk on 2018/2/9.
 */
@Controller
@RequestMapping("/anon/date")
public class DateAction extends BaseAction {
    @Autowired
    private DateService dateService;
    @GetMapping(value="/{type}/index")
    public ModelAndView index(@PathVariable(value = "type") String type) {
        return getResource(type,"date/"+type);
    }

    @PostMapping(value="/date-between")
    @ResponseBody
    public Object betweenDate(DateCalculateDto dateCalculateDto){
      return dateService.betweenDate(dateCalculateDto);
    }

    @PostMapping(value="/date-add")
    @ResponseBody
    public Object dateAdd(DateCalculateDto dateCalculateDto){
        return dateService.dateAdd(dateCalculateDto);
    }
}
