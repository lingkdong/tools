package com.tools.service;

import com.tools.BaseTest;
import com.tools.dao.CategoryDao;
import com.tools.model.Category;
import com.tools.model.Resource;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


/**
 * Created by lk on 2018/4/3.
 */
public class ResourceServiceTest extends BaseTest{
    @Autowired
    private ResourceService resourceService;
    @Autowired
    private CategoryDao categoryDao;
    @Test
    public void groupByCategory() throws Exception {
    }

    @Test
    public void groupByCategory2() throws Exception {
    }

    @Test
    public void findAllByCategoryIdIn() throws Exception {
    }

    @Test
    public void findAllByCategoryId() throws Exception {
        Category category = categoryDao.findById(1L);
        List<Resource> resources=resourceService.findAllByCategoryId(category.getId());
        System.out.println(1);
    }

    @Test
    public void toDto() throws Exception {
    }

    @Test
    public void findByCode() throws Exception {
    }

}