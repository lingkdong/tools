package com.tools.dto.user;

import lombok.Data;
import javax.servlet.http.HttpServletRequest;

/**
 * Created by lk on 2018/1/9.
 */
@Data
public class UserBaseParam {
    private String username;
    private String password;
    private String email;
    private String validCode;
    private HttpServletRequest request;
}
