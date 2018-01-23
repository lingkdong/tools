package com.tools.action.anon.format;

import com.tools.dto.format.JsFormat;
import com.tools.worker.JsFormatWorker;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by DT254 on 2017/11/17.
 */
@RestController
@RequestMapping("/tools/anon/format")
public class JsAction {
    @PostMapping(value = "/js-pretty")
    public String pretty(JsFormat format) {
        return new JsFormatWorker(format).pretty().getOutput();
    }

    @PostMapping(value = "/js-compress")
    public String compress(JsFormat format) {
        return new JsFormatWorker(format).compress().getOutput();
    }
}
