package com.tools.service;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.issue.CreateIssueCommentParam;

/**
 * @Author: dongxin
 * @Date: 2018/7/13 16:23
 **/
public interface IssueCommentService {
    BaseResponseDTO getIssueComments(Long issueId);

    BaseResponseDTO createIssueComment(CreateIssueCommentParam param);

}
