package com.tools.action;

import com.tools.dto.CategoryDto;
import com.tools.model.Resource;
import com.tools.service.CategoryService;
import com.tools.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.ModelAndView;

import java.util.Calendar;

/**
 * Created by lk on 2017/11/17.
 */
public class BaseAction {
    @Autowired
    private ResourceService resourceService;
    @Autowired
    private CategoryService categoryService;

    protected ModelAndView getResource(String resourceCode,String viewName){
        Resource resource= resourceService.findByCode(resourceCode);
        CategoryDto categoryDto=categoryService.findDtoById(resource.getCategoryId());
        ModelAndView mv=new ModelAndView(viewName);
        mv.addObject("categoryDto",categoryDto);
        mv.addObject("type",resourceCode);
        return mv;
    }

    protected ModelAndView errorPage(int status,String error){
        ModelAndView mv=new ModelAndView("error");
        mv.addObject("status",status);
        mv.addObject("error",error);
        return mv;
    }

    protected void addBirthAttribute(final ModelAndView mv, final Calendar birth){
        mv.addObject("birthYear",birth.get(Calendar.YEAR));
        mv.addObject("birthMonth",birth.get(Calendar.MONTH)+1);
        mv.addObject("birthday",birth.get(Calendar.DATE));
    }
}
