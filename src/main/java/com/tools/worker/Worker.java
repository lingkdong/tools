package com.tools.worker;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.ErrorInfo;
import com.tools.dto.HttpStatus;
import com.tools.model.User;
import com.tools.utils.RegUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by DT254 on 2018/1/9.
 */
public class Worker {

    public static BaseResponseDTO isBlank2(String property, String value) {
        if (StringUtils.isBlank(value)) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property(property)
                    .HttpStatus(HttpStatus.IS_BLANK).build());
        }
        return OK();
    }
    public static BaseResponseDTO isEmail(String value) {
        String property = "email";
        BaseResponseDTO dto = Worker.isBlank2(property, value);
        if (!Worker.isOK(dto)) return dto;
        if (!RegUtils.isEmail(value)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,  ErrorInfo.newErrorInfo
                ().property(property).HttpStatus(HttpStatus.INVALID_FORMAT).build());
        return OK();
    }

    public static BaseResponseDTO isNull(String property, Object value) {
        if (value==null) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property(property)
                    .HttpStatus(HttpStatus.IS_BLANK).build());
        }
        return OK();
    }

    public static BaseResponseDTO OK() {
        return new BaseResponseDTO(HttpStatus.OK);
    }
    public static BaseResponseDTO OK(Object data) {
        return new BaseResponseDTO(HttpStatus.OK,data);
    }

    public static boolean isOK(BaseResponseDTO dto) {
        return dto.getStatus().equals(HttpStatus.OK.value());
    }

    public static User getCurrentUser(){
        try {
            return (User)SecurityUtils.getSubject().getPrincipals().getPrimaryPrincipal();
        }catch (Exception e){
            return null;
        }
    }
}
