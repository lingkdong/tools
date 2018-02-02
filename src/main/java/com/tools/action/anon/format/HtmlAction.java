package com.tools.action.anon.format;

import com.tools.dto.format.HtmlFormat;
import com.tools.worker.HtmlFormatWorker;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by DT254 on 2017/11/17.
 */
@RestController
@RequestMapping("/tools/anon/format")
public class HtmlAction {
    @PostMapping(value = "/html-pretty")
    public String pretty(HtmlFormat format) {
        return new HtmlFormatWorker(format).pretty().getOutput();
    }

    @PostMapping(value = "/html-compress")
    public String compress(HtmlFormat format) {
        return new HtmlFormatWorker(format).compress().getOutput();
    }
}
