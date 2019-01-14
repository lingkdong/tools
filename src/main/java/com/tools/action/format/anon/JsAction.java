package com.tools.action.format.anon;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.format.JsFormat;
import com.tools.worker.JsFormatWorker;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by lk on 2017/11/17.
 */
@RestController
@RequestMapping("/anon/format")
public class JsAction {
    @PostMapping(value = "/js-pretty")
    public Object pretty(JsFormat format) {
        try {
            return new BaseResponseDTO(HttpStatus.OK,new JsFormatWorker(format).pretty().getOutput());
        } catch (Exception e) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
        }
    }

    @PostMapping(value = "/js-compress")
    public Object compress(JsFormat format) {
        try {
            return new BaseResponseDTO(HttpStatus.OK,new JsFormatWorker(format).compress().getOutput());
        } catch (Exception e) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
        }
    }
}
