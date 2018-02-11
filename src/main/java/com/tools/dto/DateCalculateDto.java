package com.tools.dto;

import lombok.Data;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

/**
 * Created by DT254 on 2018/2/9.
 */
@Data
public class DateCalculateDto {
    public static final List<String> operators=Arrays.asList("add","subtract");
    private Date startDate;
    private Date endDate;
    private Integer differ;
    private String operator;
}
