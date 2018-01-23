package com.tools.worker;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.ErrorInfo;
import com.tools.dto.HttpStatus;
import org.apache.commons.lang3.StringUtils;

import java.util.HashMap;

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

    public static BaseResponseDTO OK() {
        return new BaseResponseDTO(HttpStatus.OK);
    }
    public static BaseResponseDTO OK(Object data) {
        return new BaseResponseDTO(HttpStatus.OK,data);
    }

    public static boolean isOK(BaseResponseDTO dto) {
        return dto.getStatus().equals(HttpStatus.OK.value());
    }
}
