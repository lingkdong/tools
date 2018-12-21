package com.tools.service;

import com.tools.dto.issue.FindIssuesParam;
import com.tools.dto.issue.ViewIssuesDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

/**
 * @Author: dongxin
 * @Date: 2018/7/13 16:23
 **/
public interface IssueService {
    Page<ViewIssuesDto> findIssues(FindIssuesParam param, Pageable pageable);

    List getStatusStatistics();
}
