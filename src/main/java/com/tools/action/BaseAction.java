package com.tools.action;

import com.tools.dto.CategoryDto;
import com.tools.model.Resource;
import com.tools.service.CategoryService;
import com.tools.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by DT254 on 2017/11/17.
 */
public class BaseAction {
    @Autowired
    private ResourceService resourceService;
    @Autowired
    private CategoryService categoryService;

    public ModelAndView getResource(String resourceCode,String viewName){
        Resource resource= resourceService.findByCode(resourceCode);
        CategoryDto categoryDto=categoryService.findDtoById(resource.getCategoryId());
        ModelAndView mv=new ModelAndView(viewName);
        mv.addObject("categoryDto",categoryDto);
        mv.addObject("type",resourceCode);
        return mv;
    }
}
