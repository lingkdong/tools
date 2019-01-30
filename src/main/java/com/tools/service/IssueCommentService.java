package com.tools.service;

import com.tools.dto.BaseResponseDTO;

/**
 * @Author: dongxin
 * @Date: 2018/7/13 16:23
 **/
public interface IssueCommentService {
    BaseResponseDTO getIssueComments(Long issueId);

}
