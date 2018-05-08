package com.tools.utils;

import com.lowagie.text.DocumentException;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.markdown4j.Markdown4jProcessor;
import org.w3c.tidy.Tidy;
import org.xhtmlrenderer.pdf.ITextRenderer;

import java.io.*;

/**
 * Created by lk on 2018/5/8.
 */
@Slf4j
public class MarkdownUtil {
    public static String markdownToHtml(String txt) throws ToolException {
        try {
            return new Markdown4jProcessor().process(txt).trim();
        } catch (IOException e) {
            log.error("<MarkdownUtil.markdownToHtml, {} {} >", e, e.getStackTrace()[0].toString());
            throw ToolException.MARKDOWN_TO_HTML_EXCEPTION;
        }
    }

    public static void markdownToHtml(String txt, File file) throws ToolException {
        try {
            FileUtils.writeStringToFile(file, markdownToHtml(txt));
        } catch (IOException e) {
            log.error("<MarkdownUtil.markdownToHtml, {} {} >", e, e.getStackTrace()[0].toString());
            throw ToolException.FILE_WRITE_EXCEPTION;
        }
    }

    public static byte[] htmlToPdf(String txt,String inputEncoding,String outputEncoding) throws ToolException {
        try {
            txt=clean(txt,inputEncoding,outputEncoding);
            ITextRenderer renderer = new ITextRenderer();
            renderer.setDocumentFromString(txt);
            renderer.layout();
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            renderer.createPDF(outputStream);
            byte[] bytes = outputStream.toByteArray();
            return bytes;
        } catch (DocumentException e) {
            log.error("<MarkdownUtil.markdownToHtml, {} {} >", e, e.getStackTrace()[0].toString());
            throw ToolException.HTML_TO_PDF_EXCEPTION;
        }

    }
    public static byte[] htmlToPdf(String txt) throws ToolException {
      return htmlToPdf(txt,null,null);
    }

    public static void htmlToPdf(String txt, File file) throws ToolException {
        try {
            FileUtils.writeByteArrayToFile(file, htmlToPdf(txt));
        } catch (IOException e) {
            log.error("<MarkdownUtil.htmlToPdf, {} {} >", e, e.getStackTrace()[0].toString());
            throw ToolException.FILE_WRITE_EXCEPTION;
        }

    }

    public static String clean(String input, String inputEncoding, String outputEncoding) throws ToolException {
        InputStream stringAsStream;

        try {
            stringAsStream = new ByteArrayInputStream(input.getBytes(inputEncoding != null ? inputEncoding : "UTF-8"));
        } catch (UnsupportedEncodingException e) {
            throw ToolException.STRING_ENCODE_EXCEPTION;
        }
        ByteArrayOutputStream outputAsStream = new ByteArrayOutputStream();
        Tidy htmlCleaner = new Tidy();
        if(null!=inputEncoding)   htmlCleaner.setInputEncoding(inputEncoding);
        if(null!=outputEncoding) htmlCleaner.setOutputEncoding(outputEncoding);
        htmlCleaner.setXHTML(true);
        htmlCleaner.parse(stringAsStream, outputAsStream);

        try {
            if(null!=outputEncoding) return outputAsStream.toString(outputEncoding);
        } catch (UnsupportedEncodingException e) {
            throw ToolException.STRING_ENCODE_EXCEPTION;
        }
        return outputAsStream.toString();
    }

    public static String clean(String input) throws ToolException {
        return clean(input, null, null);
    }


    public static byte[] markdownToPdf(String txt,String inputEncoding, String outputEncoding) throws ToolException {
        return htmlToPdf(markdownToHtml(txt),inputEncoding,outputEncoding);
    }

    public static byte[] markdownToPdf(String txt) throws ToolException {
        return htmlToPdf(markdownToHtml(txt),null,null);
    }

    public static void markdownToPdf(String txt, File file) throws ToolException {
        try {
            FileUtils.writeByteArrayToFile(file, htmlToPdf(markdownToHtml(txt)));
        } catch (IOException e) {
            log.error("<MarkdownUtil.markdownToPdf, {} {} >", e, e.getStackTrace()[0].toString());
            throw ToolException.FILE_WRITE_EXCEPTION;
        }
    }
    public static void markdownToPdf(String txt, File file,String inputEncoding, String outputEncoding) throws ToolException {
        try {
            FileUtils.writeByteArrayToFile(file, htmlToPdf(markdownToHtml(txt),inputEncoding,outputEncoding));
        } catch (IOException e) {
            log.error("<MarkdownUtil.markdownToPdf, {} {} >", e, e.getStackTrace()[0].toString());
            throw ToolException.FILE_WRITE_EXCEPTION;
        }
    }


}
