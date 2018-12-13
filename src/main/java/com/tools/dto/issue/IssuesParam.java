package com.tools.dto.issue;

import lombok.Data;

/**
 * issues query param
 * @Author: dongxin
 * @Date: 2018/7/13 14:50
 **/
@Data
public class IssuesParam {
    /**
     * issue status
     * 1: open
     * 2: close
     */
   private Byte issueStatus;
   private String title;

}
