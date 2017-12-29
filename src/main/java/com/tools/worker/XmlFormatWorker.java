package com.tools.worker;

import com.tools.detection.CheckFormat;
import com.tools.dto.format.Format;
import com.tools.dto.format.XmlFormat;
import com.tools.utils.XmlUtils;

/**
 * Created by DT254 on 2017/11/7.
 */
public class XmlFormatWorker extends FormatWorker {
    private XmlFormat format;
    public XmlFormatWorker(XmlFormat format) {
        this.format=format;
    }

    @Override
    public Format pretty() {
        if(!CheckFormat.inputBlank(format)){
           format.setOutput(XmlUtils.format(format.getInput()));
        }
        return format;
    }

    @Override
    public Format compress() {
        if(!CheckFormat.inputBlank(format)){
            format.setOutput(XmlUtils.compress(format.getInput()));
        }
        return format;
    }
}
