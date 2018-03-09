package com.tools.advice;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
@Slf4j
public class ControllerDefaultExceptionHandler {
    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    public Object defaultExceptionHander(HttpServletRequest req, Exception e) throws Exception {
        if (AnnotationUtils.findAnnotation(e.getClass(), ResponseStatus.class) != null) {
            throw e;
        }

        log.error("<visit url {} failed, {} {} >", req.getRequestURL(), e, e.getStackTrace()[0].toString());
        return new BaseResponseDTO(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
