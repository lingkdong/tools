package com.tools.dto.user;

import lombok.Data;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by DT254 on 2018/1/19.
 */
@Data
public class LoginDto {
    private String username;
    private String password;
    private boolean rememberMe;
    private HttpServletRequest request;
}
