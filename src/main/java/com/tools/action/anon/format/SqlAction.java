package com.tools.action.anon.format;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.format.SqlFormat;
import com.tools.worker.SqlFormatWorker;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by lk on 2017/11/17.
 */
@RestController
@RequestMapping("/anon/format")
public class SqlAction {
    @PostMapping(value = "/sql-pretty")
    public Object pretty(SqlFormat format) {
        try {
            return new BaseResponseDTO(HttpStatus.OK,new SqlFormatWorker(format).pretty().getOutput());
        } catch (Exception e) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
        }
    }

    @PostMapping(value = "/sql-compress")
    public Object compress(SqlFormat format) {
        try {
            return new BaseResponseDTO(HttpStatus.OK,new SqlFormatWorker(format).compress().getOutput());
        } catch (Exception e) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
        }
    }
}
