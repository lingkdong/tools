package com.tools.dto.user;

import lombok.Data;

import java.util.Date;

/**
 * Created by DT254 on 2018/1/26.
 */
@Data
public class CompleteDto {
    private String trueName;
    private Date birthday;
    private Boolean male;
    private String skillTag;
    private String phone;
    private String location;
}
