package com.tools.action.anon.format;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.format.HtmlFormat;
import com.tools.worker.HtmlFormatWorker;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by lk on 2017/11/17.
 */
@RestController
@RequestMapping("/anon/format")
public class HtmlAction {
    @PostMapping(value = "/html-pretty")
    public Object pretty(HtmlFormat format) {
        try {
            return new BaseResponseDTO(HttpStatus.OK,new HtmlFormatWorker(format).pretty().getOutput());
        } catch (Exception e) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
        }
    }

    @PostMapping(value = "/html-compress")
    public Object compress(HtmlFormat format) {
        try {
            return new BaseResponseDTO(HttpStatus.OK,new HtmlFormatWorker(format).compress().getOutput());
        } catch (Exception e) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
        }
    }
}
