package com.tools.worker;

import com.tools.detection.CheckFormat;
import com.tools.dto.format.JsFormat;
import com.tools.dto.format.Format;
import com.tools.utils.CssUtils;
import com.tools.utils.JsUtils;

/**
 * Created by DT254 on 2017/11/7.
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