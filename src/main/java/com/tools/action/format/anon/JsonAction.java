package com.tools.action.format.anon;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.format.JsonFormat;
import com.tools.worker.JsonFormatWorker;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by lk on 2017/11/17.
 */
@RestController
@RequestMapping("/anon/format")
@Slf4j
public class JsonAction {
    @PostMapping(value = "/json-pretty")
    public Object pretty(JsonFormat format) {
        try {
            return new BaseResponseDTO(HttpStatus.OK, new JsonFormatWorker(format).pretty().getOutput());
        } catch (Exception e) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
        }
    }

    @PostMapping(value = "/json-compress")
    public Object compress(JsonFormat format) {
        try {
            return new BaseResponseDTO(HttpStatus.OK, new JsonFormatWorker(format).compress().getOutput());
        } catch (Exception e) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
        }
    }
}
