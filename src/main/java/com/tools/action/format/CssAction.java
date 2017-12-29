package com.tools.action.format;

import com.tools.dto.format.CssFormat;
import com.tools.worker.CssFormatWorker;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by DT254 on 2017/11/17.
 */
@RestController
@RequestMapping("/tools/format")
public class CssAction {
    @PostMapping(value = "/css-pretty")
    public String pretty(CssFormat format) {
        return new CssFormatWorker(format).pretty().getOutput();
    }

    @PostMapping(value = "/css-compress")
    public String compress(CssFormat format) {
        return new CssFormatWorker(format).compress().getOutput();
    }
}
