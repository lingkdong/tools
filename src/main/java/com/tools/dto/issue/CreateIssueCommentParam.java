package com.tools.dto.issue;

import lombok.Data;

/**
 * @Author: dongxin
 * @Date: 2019/1/31 17:00
 **/
@Data
public class CreateIssueCommentParam {
    private Long issueId;
    private Byte type;
    private String comment;
}
