package com.tools.dao;

import com.tools.BaseTest;
import com.tools.model.Category;
import com.tools.utils.StringUtil;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;

import java.util.List;

import static org.junit.Assert.*;

/**
 * Created by DT254 on 2017/11/10.
 */
public class CategoryDaoTest extends BaseTest {
    @Autowired
    CategoryDao categoryDao;
    @Test
    public void findByNameContainingOrCodeContainingOrderBySortNum() throws Exception {
        Object o=categoryDao.findByNameContainingOrCodeContainingOrTagsContainingOrderBySortNum("计算","","压缩",new
                PageRequest(0,20));
        System.out.println(StringUtil.toString(o));
    }

    @Test
    public void findAllByOrderBySortNum() throws Exception {
        Object o=categoryDao.findAllByOrderBySortNum(new PageRequest(0,20));
        System.out.println(StringUtil.toString(o));
    }


}