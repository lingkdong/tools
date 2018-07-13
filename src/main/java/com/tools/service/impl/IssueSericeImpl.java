package com.tools.service.impl;

import com.tools.dto.issue.IssuesParam;
import com.tools.dto.issue.ViewIssuesDto;
import com.tools.service.IssueService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * @Author: dongxin
 * @Date: 2018/7/13 16:25
 **/
@Slf4j
@Service
public class IssueSericeImpl implements IssueService {
    @Override
  public Page<ViewIssuesDto> list(IssuesParam param, Pageable pageable){
       return null;
  }
}
