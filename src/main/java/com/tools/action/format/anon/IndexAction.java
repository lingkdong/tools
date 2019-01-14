package com.tools.action.format.anon;

import com.tools.action.BaseAction;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.CategoryDto;
import com.tools.dto.HttpStatus;
import com.tools.service.CategoryService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by lk on 2017/8/30.
 */
@Controller
@RequestMapping("/anon")
public class IndexAction extends BaseAction {
    @Autowired
    private CategoryService categoryService;
    @GetMapping(value = "/index")
    public ModelAndView index(@RequestParam(value = "q", required = false) String searchKey) {
        ModelAndView mv=new ModelAndView("index");
        if(StringUtils.isNotBlank(searchKey)) searchKey=searchKey.trim();
        Page<CategoryDto> page = categoryService.find(searchKey, new PageRequest(0,5));
        mv.addObject("page",page);
        mv.addObject("q",searchKey);
        return mv;
    }
    @PostMapping(value = "/search")
    @ResponseBody
    public BaseResponseDTO search(@RequestParam(value = "q", required = false) String searchKey, Pageable
            pageable) {
        if(StringUtils.isNotBlank(searchKey)) searchKey=searchKey.trim();
        Page<CategoryDto> categories = categoryService.find(searchKey, pageable);
        return new BaseResponseDTO(HttpStatus.OK, categories);
    }

}
