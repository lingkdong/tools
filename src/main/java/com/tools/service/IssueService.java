package com.tools.service;

import com.tools.constants.IssueStatus;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.UploadFileDto;
import com.tools.dto.issue.CreateIssueParam;
import com.tools.dto.issue.FindIssuesParam;
import com.tools.dto.issue.ViewIssueDto;
import com.tools.dto.issue.ViewIssueListDto;
import com.tools.model.Issue;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * @Author: dongxin
 * @Date: 2018/7/13 16:23
 **/
public interface IssueService {
    Page<ViewIssueListDto> findIssues(FindIssuesParam param, Pageable pageable);

    List getStatusStatistics();

    BaseResponseDTO uploadFile(UploadFileDto uploadFileDto);

    BaseResponseDTO createIssue(CreateIssueParam createIssueParam);

    Issue findOne(Long id);

    ViewIssueDto toDto(Issue issue);

    int updateStatus(Long id, IssueStatus issueStatus);

    int addCommentCount(Long id);
}
