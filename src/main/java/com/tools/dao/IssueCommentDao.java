package com.tools.dao;

import com.tools.model.IssueComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @Author: dongxin
 * @Date: 2018/12/21 17:23
 **/
public interface IssueCommentDao extends JpaRepository<IssueComment, Long> {
    List<IssueComment> findByIssueIdOrderByCreateTimeDesc(Long issueId);
}
