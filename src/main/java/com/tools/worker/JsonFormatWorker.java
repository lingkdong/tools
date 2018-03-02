package com.tools.worker;

import com.tools.detection.CheckFormat;
import com.tools.dto.format.Format;
import com.tools.dto.format.JsonFormat;
import com.tools.utils.JsonUtils;

/**
 * Created by lk on 2017/11/7.
 */
public class JsonFormatWorker extends FormatWorker {
    private JsonFormat format;
    public JsonFormatWorker(JsonFormat format) {
        this.format=format;
    }

    @Override
    public Format pretty() {
        if(!CheckFormat.inputBlank(format)){
           format.setOutput(JsonUtils.format(format.getInput()));
        }
        return format;
    }

    @Override
    public Format compress() {
        if(!CheckFormat.inputBlank(format)){
            format.setOutput(JsonUtils.compress(format.getInput()));
        }
        return format;
    }
}
