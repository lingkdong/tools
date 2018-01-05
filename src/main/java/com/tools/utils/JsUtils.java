package com.tools.utils;

import com.googlecode.htmlcompressor.compressor.YuiJavaScriptCompressor;
import org.apache.commons.lang3.StringUtils;

/**
 * Created by DT254 on 2017/12/13.
 */
public class JsUtils {
    public static String format(String txt) {
        return txt;
    }

    public static String compress(String txt) {
        if(StringUtils.isBlank(txt)) return txt;
        YuiJavaScriptCompressor compressor = new YuiJavaScriptCompressor();
        return compressor.compress(txt);
    }
}
