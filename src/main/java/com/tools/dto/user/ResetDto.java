package com.tools.dto.user;

import lombok.Data;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by lk on 2018/1/31.
 */
@Data
public class ResetDto {
    private String email;
    private HttpServletRequest request;
}
