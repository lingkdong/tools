package com.tools.dto.user;

import lombok.Data;

import java.util.Date;

/**
 * Created by lk on 2018/1/26.
 */
@Data
public class SaveChangeParam {
    private String picture;
    private String trueName;
    private Date birthday;
    private Boolean male;
    private String skillTag;
    private String phone;
    private String location;
    private String bio;
}
