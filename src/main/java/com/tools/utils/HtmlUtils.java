package com.tools.utils;

import com.googlecode.htmlcompressor.compressor.ClosureJavaScriptCompressor;
import com.googlecode.htmlcompressor.compressor.HtmlCompressor;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

/**
 * Created by DT254 on 2017/11/8.
 */
public class HtmlUtils {
    public static String format(String html){
        Document document= Jsoup.parse(html);
        return document.html();
    }

    public static String compress(String html){
        HtmlCompressor compressor = new HtmlCompressor();
        compressor.setRemoveComments(false);            //if false keeps HTML comments (default is true)
        compressor.setRemoveIntertagSpaces(true);      //removes iter-tag whitespace characters
        compressor.setCompressCss(true);               //compress inline css
        compressor.setCompressJavaScript(true);        //compress inline javascript
        compressor.setYuiCssLineBreak(80);             //--line-break param for Yahoo YUI Compressor
        compressor.setYuiJsDisableOptimizations(true); //--disable-optimizations param for Yahoo YUI Compressor
        compressor.setYuiJsLineBreak(-1);              //--line-break param for Yahoo YUI Compressor
        compressor.setYuiJsNoMunge(true);              //--nomunge param for Yahoo YUI Compressor
        compressor.setYuiJsPreserveAllSemiColons(true);//--preserve-semi param for Yahoo YUI Compressor
       return compressor.compress(html);
    }
}
