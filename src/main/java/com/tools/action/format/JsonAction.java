package com.tools.action.format;

import com.tools.dto.format.JsonFormat;
import com.tools.worker.JsonFormatWorker;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by DT254 on 2017/11/17.
 */
@RestController
@RequestMapping("/tools/format")
public class JsonAction {
    @PostMapping(value = "/json-pretty")
    public String pretty(JsonFormat format) {
        return new JsonFormatWorker(format).pretty().getOutput();
    }

    @PostMapping(value = "/json-compress")
    public String compress(JsonFormat format) {
        return new JsonFormatWorker(format).compress().getOutput();
    }
}
