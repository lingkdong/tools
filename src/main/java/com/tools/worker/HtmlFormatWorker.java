package com.tools.worker;

import com.tools.detection.CheckFormat;
import com.tools.dto.format.Format;
import com.tools.dto.format.HtmlFormat;
import com.tools.utils.HtmlUtils;

/**
 * Created by DT254 on 2017/11/7.
 */
public class HtmlFormatWorker extends FormatWorker {
    private HtmlFormat format;
    public HtmlFormatWorker(HtmlFormat format) {
       this.format=format;
    }
    @Override
    public Format pretty() {
        if(!CheckFormat.inputBlank(format)){
           format.setOutput(HtmlUtils.format(format.getInput()));
        }
        return format;
    }

    @Override
    public Format compress() {
        if(!CheckFormat.inputBlank(format)){
            format.setOutput(HtmlUtils.compress(format.getInput()));
        }
        return format;
    }
}
