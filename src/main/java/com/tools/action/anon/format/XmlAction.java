package com.tools.action.anon.format;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.format.XmlFormat;
import com.tools.worker.XmlFormatWorker;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by lk on 2017/11/17.
 */
@RestController
@RequestMapping("/tools/anon/format")
public class XmlAction {
    @PostMapping(value = "/xml-pretty")
    public Object pretty(XmlFormat format) {
        try {
            return new BaseResponseDTO(HttpStatus.OK,new XmlFormatWorker(format).pretty().getOutput());
        } catch (Exception e) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
        }
    }

    @PostMapping(value = "/xml-compress")
    public Object compress(XmlFormat format) {
        try {
            return new BaseResponseDTO(HttpStatus.OK,new XmlFormatWorker(format).compress().getOutput());
        } catch (Exception e) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
        }
    }
}
