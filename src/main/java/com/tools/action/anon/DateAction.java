package com.tools.action.anon;

import com.tools.dto.CategoryDto;
import com.tools.dto.DateCalculateDto;
import com.tools.model.Resource;
import com.tools.service.CategoryService;
import com.tools.service.DateService;
import com.tools.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by DT254 on 2018/2/9.
 */
@Controller
@RequestMapping("/tools/anon/date")
public class DateAction {
    @Autowired
    private ResourceService resourceService;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private DateService dateService;
    @GetMapping(value="/{type}/index")
    public ModelAndView index(@PathVariable(value = "type") String type) {
        Resource resource= resourceService.findByCode(type);
        CategoryDto categoryDto=categoryService.findDtoById(resource.getCategoryId());
        ModelAndView mv=new ModelAndView("date/"+type);
        mv.addObject("categoryDto",categoryDto);
        mv.addObject("type",type);
        return mv;
    }

    @PostMapping(value="/date-between")
    @ResponseBody
    public Object betweenDate(DateCalculateDto dateCalculateDto){
      return dateService.betweenDate(dateCalculateDto);
    }
}
