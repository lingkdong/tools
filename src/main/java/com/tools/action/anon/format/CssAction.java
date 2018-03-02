package com.tools.action.anon.format;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.format.CssFormat;
import com.tools.worker.CssFormatWorker;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by lk on 2017/11/17.
 */
@RestController
@RequestMapping("/tools/anon/format")
public class CssAction {
    @PostMapping(value = "/css-pretty")
    public Object pretty(CssFormat format) {
        try {
            return new BaseResponseDTO(HttpStatus.OK,new CssFormatWorker(format).pretty().getOutput());
        } catch (Exception e) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
        }
    }

    @PostMapping(value = "/css-compress")
    public Object compress(CssFormat format) {
        try {

            return new BaseResponseDTO(HttpStatus.OK,new CssFormatWorker(format).compress().getOutput());
        } catch (Exception e) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
        }
    }
}
