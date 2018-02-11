package com.tools;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.tools.utils.CssFormator;
import com.tools.utils.StringUtil;
import org.junit.Test;

import java.io.*;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by DT254 on 2017/12/8.
 */
public class CodeTest {
    public static void main(String[] args) {
        try {
            addTitle("E:\\Derby_jira\\Trivago\\trivago_report.txt",readTitle("E:\\trivago_report.txt"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @Test
    public void testGson(){
        Map<String,Object> map=new HashMap<>();
        map.put("key","000101");
        map.put("name","json");
        map.put("value","json_long_java");
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String json=gson.toJson(map);
        System.out.println(json);

    }
    public static final String readTitle(String filePath) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(
                new FileInputStream(filePath)));

        for (String line = br.readLine(); line != null; line = br.readLine()) {
           return line;
        }
        br.close();
       return "";
    }

    public static void addTitle(String filePath, String title) {
        RandomAccessFile randomFile = null;
        try {
            // 打开一个随机访问文件流，按读写方式
            randomFile = new RandomAccessFile(filePath, "rw");
            // 文件长度，字节数
            // 将写文件指针移到文件尾。
            randomFile.seek(0);
            randomFile.writeBytes(title);
        } catch (IOException e) {
            e.printStackTrace();
        } finally{
            if(randomFile != null){
                try {
                    randomFile.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }


    @Test
    public void CssCompressorTest(){
        String txt="{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;" +
                "text-rendering:auto;;;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}" +
                ".fa-lg.test{font-size:1.33333333em;line-height:.75em;vertical-align:-15%;}.fa-2x{font-size:2em}" +
                ".fa-3x{font-size:3em;;}";
        StringWriter result = new StringWriter();
        try {
            CssFormator formator = new CssFormator(new StringReader(txt));
            formator.format(result);
        } catch (IOException e) {
            result.write(txt);
            e.printStackTrace();
        }
        System.out.println(result.toString());
    }

    @Test
    public void testValid(){
//        System.out.println(StringUtil.getValidCode(1000));
        int test=0x7fffffff;
        System.out.println(test);
    }
}
