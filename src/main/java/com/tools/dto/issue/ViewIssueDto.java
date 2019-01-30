package com.tools.dto.issue;

import com.tools.constants.IssueLabel;
import com.tools.constants.IssueStatus;
import com.tools.dto.user.UsersDto;
import lombok.Data;

import java.util.Date;

/**
 * @Author: dongxin
 * @Date: 2018/7/13 17:06
 **/
@Data
public class ViewIssueDto {
    private Long id;
    private String title;
    /**
     * creator
     */
    private UsersDto usersDto;
    private IssueStatus issueStatus;//open, closed
    private IssueLabel issueLabel;
    private String body;
    private Long commentCount;
    private Date createTime;
    private Date lastUpdateTime;

}
