package com.tools.service;

import com.tools.dto.issue.IssuesParam;
import com.tools.dto.issue.ViewIssuesDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @Author: dongxin
 * @Date: 2018/7/13 16:23
 **/
public interface IssueService {
    Page<ViewIssuesDto> list(IssuesParam param, Pageable pageable);
}
