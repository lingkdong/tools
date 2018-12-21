package com.tools.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @Author: dongxin
 * @Date: 2018/12/3 17:18
 **/
@Repository
public class JdbcDao {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    /**
     * get resource and resource's category info
     * @return
     */
    public List<Map<String, Object>> findAllResourceInfo(){
       StringBuilder sql=new StringBuilder();
       sql.append(" select cat.id as cate_id,cat.name as cat_name,cat.code as cat_code,");
       sql.append(" res.code,res.name,res.url,res.target");
       sql.append(" from category cat,resource res where cat.id=res.category_id");
       sql.append(" order by cat.sort_num,res.sort_num;");
       return jdbcTemplate.queryForList(sql.toString());
    }

    public List<Map<String, Object>> getIssueStatusStatistics(){
        StringBuilder sql=new StringBuilder();
        sql.append(" select status,count(1) as totalNum from issue group by status;");
        return jdbcTemplate.queryForList(sql.toString());
    }
}
