package com.tools.dao;

import com.tools.model.Issue;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @Author: dongxin
 * @Date: 2018/12/21 17:23
 **/
public interface IssueDao extends JpaRepository<Issue, Long> {
    Page<Issue> findAll(Example example, Pageable pageable);
}
