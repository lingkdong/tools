package com.tools.action.anon.format;

import com.tools.action.BaseAction;
import com.tools.dto.CategoryDto;
import com.tools.model.Resource;
import com.tools.service.CategoryService;
import com.tools.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by DT254 on 2017/11/17.
 */
@Controller
@RequestMapping("/tools/anon/format")
public class FormatIndexAction extends BaseAction {
    @Autowired
    private ResourceService resourceService;
    @Autowired
    private CategoryService categoryService;
    @GetMapping(value="/{type}/index")
    public ModelAndView index(@PathVariable(value = "type") String type) {
          Resource resource= resourceService.findByCode(type);
          CategoryDto categoryDto=categoryService.findDtoById(resource.getCategoryId());
          ModelAndView mv=new ModelAndView("format/"+type);
          mv.addObject("categoryDto",categoryDto);
          mv.addObject("type",type);
          return mv;
    }
}
