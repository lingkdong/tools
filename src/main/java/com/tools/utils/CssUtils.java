package com.tools.utils;

import com.googlecode.htmlcompressor.compressor.YuiCssCompressor;
import org.apache.commons.lang3.StringUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

/**
 * Created by DT254 on 2017/12/13.
 */
public class CssUtils {
    public static String format(String txt) {
        if(StringUtils.isBlank(txt)) return txt;
        //1.使用js-beautity
        //2.继承 compressor 自己实现个类
        Document document= Jsoup.parse(txt);
        return document.html();
    }

    public static String compress(String txt) {
        if(StringUtils.isBlank(txt)) return txt;
        YuiCssCompressor cssCompressor = new YuiCssCompressor();
        cssCompressor.setLineBreak(-1);
        return cssCompressor.compress(txt);
    }
}
