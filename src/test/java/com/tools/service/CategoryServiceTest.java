package com.tools.service;

import com.tools.BaseTest;
import com.tools.dto.CategoryDto;
import com.tools.utils.StringUtil;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;


public class CategoryServiceTest extends BaseTest{
    @Autowired
    CategoryService categoryService;
    @Test
    public void find() throws Exception {
        Page<CategoryDto> categories= categoryService.find("日",new PageRequest(0,20));
        System.out.println("................size:"+categories.getTotalElements()+"....................");
    }


}