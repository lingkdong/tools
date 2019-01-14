package com.tools.worker;

import com.tools.utils.CheckFormat;
import com.tools.dto.format.Format;
import com.tools.dto.format.CssFormat;
import com.tools.utils.CssUtils;

/**
 * Created by lk on 2017/11/7.
 */
public class CssFormatWorker extends FormatWorker {
    private CssFormat format;
    public CssFormatWorker(CssFormat format) {
        this.format=format;
    }

    @Override
    public Format pretty() {
        if(!CheckFormat.inputBlank(format)){
           format.setOutput(CssUtils.format(format.getInput()));
        }
        return format;
    }

    @Override
    public Format compress() {
        if(!CheckFormat.inputBlank(format)){
            format.setOutput(CssUtils.compress(format.getInput()));
        }
        return format;
    }
}
