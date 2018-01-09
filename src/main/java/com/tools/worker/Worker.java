package com.tools.worker;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.utils.MapUtil;
import org.apache.commons.lang3.StringUtils;

/**
 * Created by DT254 on 2018/1/9.
 */
public class Worker {
    public static BaseResponseDTO isBlank(String property, String value) {
        if (StringUtils.isBlank(value)) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, String.format("%s 不允许为空", property));
        }
        return OK();
    }
    public static BaseResponseDTO isBlank2(String property, String value) {
        if (StringUtils.isBlank(value)) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, MapUtil.build(1).put(property,"不允许为空"));
        }
        return OK();
    }
    public static BaseResponseDTO OK() {
        return new BaseResponseDTO(HttpStatus.OK);
    }

    public static boolean OK(BaseResponseDTO dto) {
        return dto.getStatus().equals(HttpStatus.OK);
    }
}
