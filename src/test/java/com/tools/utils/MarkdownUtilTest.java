package com.tools.utils;

import org.junit.Test;

import java.io.File;

import static org.junit.Assert.*;

/**
 * Created by lk on 2018/5/8.
 */
public class MarkdownUtilTest {
    @Test
    public void markdownToPdf() {
        String  test="# Markdown Editor\n" +
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
                "```\n" +
                "表格：\n" +
                "\n" +
                "|数据库| 版本|\n" +
                "------------ | -------------\n" +
                "mysql     |1.0\n" +
                "sql server  | 2.0";
        try {
            MarkdownUtil.markdownToPdf(test,new File("F:\\test_"+MathUtils.getRandom(3)+".pdf"),"ISO-8859-1","gbk");
        } catch (ToolException e) {
            e.printStackTrace();
        }
    }

}