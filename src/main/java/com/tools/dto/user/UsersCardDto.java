package com.tools.dto.user;

import lombok.Data;

import java.util.Date;

/**
 * @Author: dongxin
 * @Description:
 * @Date: 2018/5/30 18:25
 **/
@Data
public class UsersCardDto {
    private String username;
    private String picture;
    private String skillTag;
    private String location;
    private String bio;
    private Date createTime;
    private int view;
    private int score;
}
