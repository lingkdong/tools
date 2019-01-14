package com.tools.worker;

import com.tools.utils.CheckFormat;
import com.tools.dto.format.JsFormat;
import com.tools.dto.format.Format;
import com.tools.utils.JsUtils;

/**
 * Created by lk on 2017/11/7.
 */
public class JsFormatWorker extends FormatWorker {
    private JsFormat format;
    public JsFormatWorker(JsFormat format) {
        this.format=format;
    }

    @Override
    public Format pretty() {
        if(!CheckFormat.inputBlank(format)){
           format.setOutput(JsUtils.format(format.getInput()));
        }
        return format;
    }

    @Override
    public Format compress() {
        if(!CheckFormat.inputBlank(format)){
            format.setOutput(JsUtils.compress(format.getInput()));
        }
        return format;
    }
}
