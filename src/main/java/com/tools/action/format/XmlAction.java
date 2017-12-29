package com.tools.action.format;

import com.tools.dto.format.XmlFormat;
import com.tools.worker.XmlFormatWorker;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by DT254 on 2017/11/17.
 */
@RestController
@RequestMapping("/tools/format")
public class XmlAction {
    @PostMapping(value = "/xml-pretty")
    public String pretty(XmlFormat format) {
        return new XmlFormatWorker(format).pretty().getOutput();
    }

    @PostMapping(value = "/xml-compress")
    public String compress(XmlFormat format) {
        return new XmlFormatWorker(format).compress().getOutput();
    }
}
