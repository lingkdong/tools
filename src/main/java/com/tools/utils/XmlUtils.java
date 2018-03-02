package com.tools.utils;

import com.googlecode.htmlcompressor.compressor.XmlCompressor;
import org.apache.commons.lang3.StringUtils;
import org.dom4j.Document;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.SAXReader;
import org.dom4j.io.XMLWriter;

import java.io.IOException;
import java.io.StringReader;
import java.io.StringWriter;


/**
 * Created by lk on 2017/11/7.
 */
public class XmlUtils {

    public static String format(String xml) {
        if(StringUtils.isBlank(xml)) return xml;
        return format(xml, Encoding.UTF_8);
    }

    public static String format(String xml, String encode) {
        if(StringUtils.isBlank(xml)) return xml;
        StringWriter out = null;
        XMLWriter writer = null;
        try {
            SAXReader reader = new SAXReader();
            Document document = reader.read(new StringReader(xml));

            OutputFormat format = OutputFormat.createPrettyPrint();
            format.setEncoding(encode);

            out = new StringWriter();
            writer = new XMLWriter(out, format);
            writer.write(document);

            return out.toString();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (out != null)
                    out.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                if (writer != null)
                    writer.close();
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        return null;
    }

    public static String compress(String xml) {
        XmlCompressor compressor = new XmlCompressor();
        compressor.setRemoveComments(false);      //if false keeps XML comments (default is true)
        return compressor.compress(xml);
    }
}
