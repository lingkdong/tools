package com.tools.worker;

import com.alibaba.druid.sql.SQLUtils;
import com.tools.detection.CheckFormat;
import com.tools.dto.format.Format;
import com.tools.dto.format.SqlFormat;

/**
 * Created by lk on 2017/11/7.
 */
public class SqlFormatWorker extends FormatWorker {
    private SqlFormat format;
    public SqlFormatWorker(SqlFormat format) {
        this.format=format;
    }

    @Override
    public Format pretty() {
        if(!CheckFormat.inputBlank(format)){
           format.setOutput(SQLUtils.format(format.getInput(),format.getDbType()));
        }
        return format;
    }

    @Override
    public Format compress() {
        if(!CheckFormat.inputBlank(format)){
            format.setOutput(SQLUtils.format(format.getInput(),format.getDbType()));
        }
        return format;
    }
}
