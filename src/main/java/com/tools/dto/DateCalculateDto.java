package com.tools.dto;

import lombok.Data;

import java.util.Date;

/**
 * Created by DT254 on 2018/2/9.
 */
@Data
public class DateCalculateDto {
    private Date startDate;
    private Date endDate;
    private Integer differ;
}
