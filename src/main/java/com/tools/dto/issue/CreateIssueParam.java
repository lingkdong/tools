package com.tools.dto.issue;

import lombok.Data;

/**
 * @Author: dongxin
 * @Date: 2019/1/29 13:49
 **/
@Data
public class CreateIssueParam {
    private String title;
    private String label;
    private String body;
}
