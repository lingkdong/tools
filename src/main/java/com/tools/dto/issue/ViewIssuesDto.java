package com.tools.dto.issue;

import com.tools.dto.user.UsersDto;
import lombok.Data;

/**
 * @Author: dongxin
 * @Date: 2018/7/13 17:06
 **/
@Data
public class ViewIssuesDto {
    private Long id;
    private String title;
    /**
     * creator
     */
    private UsersDto usersDto;
    private String history;

}
