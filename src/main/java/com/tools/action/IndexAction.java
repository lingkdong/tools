package com.tools.action;

import com.tools.dto.CategoryDto;
import com.tools.service.CategoryService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by DT254 on 2017/8/30.
 */
@Controller
@RequestMapping("/tools")
public class IndexAction extends BaseAction {
    @Autowired
    private CategoryService categoryService;
    @GetMapping(value = "/index")
    public ModelAndView index(@RequestParam(value = "q", required = false) String searchKey) {
        ModelAndView mv=new ModelAndView("index");
        Page<CategoryDto> page = categoryService.find(searchKey, new PageRequest(0,4));
        mv.addObject("page",page);
        if(StringUtils.isNotBlank(searchKey)) mv.addObject("q",searchKey);
        return mv;
    }

}
