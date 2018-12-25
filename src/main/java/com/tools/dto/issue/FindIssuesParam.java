package com.tools.dto.issue;

import lombok.Data;

/**
 * issues query param
 * @Author: dongxin
 * @Date: 2018/7/13 14:50
 **/
@Data
public class FindIssuesParam {
    /**
     * issue status
     * 1: open
     * 2: close
     */
   private Byte status;
   private String title;
   private String label;
   private String sort;
}
