package com.tools.dto.user;

import lombok.Data;
import javax.servlet.http.HttpServletRequest;

/**
 * Created by DT254 on 2018/1/9.
 */
@Data
public class UserBaseDto {
    private String username;
    private String password;
    private String email;
    private String vaildCode;
    private HttpServletRequest request;
}
