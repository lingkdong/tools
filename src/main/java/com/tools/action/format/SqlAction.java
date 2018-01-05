package com.tools.action.format;

import com.tools.dto.format.SqlFormat;
import com.tools.worker.SqlFormatWorker;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by DT254 on 2017/11/17.
 */
@RestController
@RequestMapping("/tools/format")
public class SqlAction {
    @PostMapping(value = "/sql-pretty")
    public String pretty(SqlFormat format) {
        return new SqlFormatWorker(format).pretty().getOutput();
    }

    @PostMapping(value = "/sql-compress")
    public String compress(SqlFormat format) {
        return new SqlFormatWorker(format).compress().getOutput();
    }
}
