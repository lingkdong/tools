package com.tools.dto.issue;

import com.tools.constants.IssueCommentType;
import com.tools.dto.user.UsersDto;
import lombok.Data;

import java.util.Date;

/**
 * @Author: dongxin
 * @Date: 2019/1/30 16:37
 **/
@Data
public class ViewIssueCommentDto {
    private Long id;
    private Long issueId;
    private UsersDto usersDto;// who reply
    private String comment;
    private IssueCommentType issueCommentType;// 1. comment 2.closed 3.reopen
    private Date createTime;
    private Date lastUpdateTime;
}
