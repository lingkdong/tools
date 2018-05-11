package com.tools.utils;

import com.lowagie.text.DocumentException;
import com.lowagie.text.pdf.BaseFont;
import org.apache.commons.io.FileUtils;
import org.junit.Test;
import org.xhtmlrenderer.pdf.ITextFontResolver;
import org.xhtmlrenderer.pdf.ITextRenderer;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;

/**
 * Created by lk on 2018/5/8.
 */
public class MarkdownUtilTest {
    @Test
    public void markdownToPdf() {
        String test = "# Markdown Editor\n" +
                "\n" +
                "\n" +
                "## 标题2\n" +
                "###### 标题6\n" +
                "*斜体*\n" +
                "**加粗**\n" +
                "\n" +
                "* 列表 1\n" +
                "* 列表 2\n" +
                "   * 列表 2.1\n" +
                "\n" +
                "1. 列表 1\n" +
                "2. 列表 2\n" +
                "\n" +
                "\n" +
                " 链接：[GitHub](http://github.com)\n" +
                "\n" +
                " 引用(两个空格以后 点击换行 可以实现换行)：\n" +
                ">在Java中，最基本的互斥同步手段就是synchronized关键字  ，\n" +
                ">synchronized关键字经过编译\n" +
                ">之后，会在同步块的前后分别形成\n" +
                ">monitorenter和monitorexit这两个字节码指令\n" +
                "\n" +
                "反斜杠转义 \\* \\# \\[\n" +
                "\n" +
                "\n" +
                "```代码块\n" +
                "function test() {\n" +
                "console.log(\"look ma`, no spaces\");\n" +
                "}\n" +
                "```\n"
               ;
        try {
//            List<String> fonts = Arrays.asList(this.getClass().getResource("simsun.ttc").getFile());
//                FileUtils.writeByteArrayToFile(new File("F:\\test_"+MathUtils.getRandom(3)+".pdf"),
//                        MarkdownUtil.markdownToPdf(test,Arrays.asList("C:\\Windows\\Fonts\\simsun.ttc")));
//                FileUtils.writeStringToFile(new File("F://test.html"),MarkdownUtil.clean(MarkdownUtil.markdownToHtml
//                        (test),"utf-8",null));


            StringBuilder builder = new StringBuilder();
            builder.append("<!DOCTYPE html>\n" +
                    "<html>\n" +
                    "<head>\n" +
                    "    <meta charset=\"UTF-8\"/>\n" +
                    "    <style>\n" +
                    "        body{\n" +
                    "            font-family:SimSun;\n" +
                    "            font-size:14px;\n" +
                    "        }\n" +
                    "    </style>\n" +
                    "</head>\n" +
                    "<body>")
                    .append(MarkdownUtil.markdownToHtml(test)
                    ).append
                    ("</body>\n" +
                            "</html>");
//            MarkdownUtil.htmlToPdf(builder.toString(), new File("F:\\test.pdf"), fonts);
//            pdfHandler(builder.toString(), "F:\\test.pdf");
//            pdfHandler("F://new 3.html", "F:\\test_" + MathUtils.getRandom(3) + ".pdf");
//            pdfHandlerFile("F://open.html", "F:\\test.pdf");
            System.out.println(ClassLoader.getSystemResource(""));
        } catch (Exception e) {
            e.printStackTrace();
        }

    }


    private static void pdfHandler(String content, String pdfUrl) throws IOException, DocumentException {
        File pdfFile = new File(pdfUrl);
        OutputStream os = new FileOutputStream(pdfFile);
        ITextRenderer renderer = new ITextRenderer();
        renderer.setDocumentFromString(content);
        ITextFontResolver fontResolver = renderer.getFontResolver();
        fontResolver.addFont("C:\\Windows\\Fonts\\simsun.ttc", BaseFont.IDENTITY_H, BaseFont.NOT_EMBEDDED);
        renderer.layout();
        renderer.createPDF(os);
        os.close();
    }

    private static void pdfHandlerFile(String htmUrl, String pdfUrl) throws IOException, DocumentException {
        File htmFile = new File(htmUrl);
        File pdfFile = new File(pdfUrl);
        String url = htmFile.toURI().toURL().toString();
        OutputStream os = new FileOutputStream(pdfFile);
        ITextRenderer renderer = new ITextRenderer();
        renderer.setDocument(url);
        ITextFontResolver fontResolver = renderer.getFontResolver();
        fontResolver.addFont("C:\\Windows\\Fonts\\simsun.ttc", BaseFont.IDENTITY_H, BaseFont.NOT_EMBEDDED);
        renderer.layout();
        renderer.createPDF(os);
        os.close();
    }

}