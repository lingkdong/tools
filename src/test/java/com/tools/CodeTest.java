package com.tools;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.tools.dto.CategoryDto;
import com.tools.utils.*;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.jodconverter.office.OfficeManager;
import org.junit.Test;
import org.springframework.aop.support.AopUtils;

import java.io.*;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collector;
import java.util.stream.Collectors;

/**
 * Created by lk on 2017/12/8.
 */
public class CodeTest {
    public static void main(String[] args) {
        try {
            addTitle("E:\\Derby_jira\\Trivago\\trivago_report.txt", readTitle("E:\\trivago_report.txt"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testGson() {
        Map<String, Object> map = new HashMap<>();
        map.put("key", "000101");
        map.put("name", "json");
        map.put("value", "json_long_java");
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String json = gson.toJson(map);
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
        } finally {
            if (randomFile != null) {
                try {
                    randomFile.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }


    @Test
    public void CssCompressorTest() {
        String txt = "{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;" +
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
    public void testValid() {
//        System.out.println(StringUtil.getValidCode(1000));
        int test = 0x7fffffff;
        System.out.println(test);
    }

    @Test
    public void jodconverterCoreTest() {
        Object obj = new Object();
        ;
        System.out.println(AopUtils.getTargetClass(obj).getName());
    }

    @Test
    public void image() {
        File file = new File("E:\\files\\fox1.png");
        ImgUtil.doCompress("E:\\files\\fox1.png", 48, 48, "_48", false);
        ImgUtil.doCompress("E:\\files\\fox1.png", 32, 32, "_32", false);
        ImgUtil.doCompress("E:\\files\\fox1.png", 100, 100, "_100", false);
    }

    @Test
    public void testChar() {
//        for (int i = 33; i < 50; i++) {
//            char c = (char) i;
//            System.out.print("<th>" + String.valueOf(c) + "</th>");
//            System.out.println();
//        }
        for (int i = 108; i < 127; i++) {
            char c = (char) i;
            System.out.print("<th>" + String.valueOf(c) + "</th>");
            System.out.println();
        }
//        for (int i = 98; i < 127; i++) {
//            char c = (char) i;
//            System.out.print("<th>" + String.valueOf(c) + "</th>");
//            System.out.println();
//        }


    }

    @Test
    public void testPage(){
        int pageSize=7;
        List<Integer> list=new ArrayList<>();
        for(int i=1;i<21;i++){
            list.add(Integer.valueOf(i));
        }
        //page test
        Double pages=Math.ceil(Double.valueOf(list.size())/Double.valueOf(pageSize)) ;
        for(int page=0;page<pages.intValue();page++){
            int toIndex=(page+1)*pageSize;
            List<Integer>sub=list.subList(page * pageSize, (toIndex>list.size())?list.size():toIndex) ;
            sub.stream().forEach(item->System.out.println(item));
            System.out.println("page"+(page+1));
        }
    }

    @Test
    public void testMapKey(){
        List<CategoryDto> list= Arrays.asList(
                CategoryDto.newCategoryDto().id(1L).name("test1").description("one") .build(),
                CategoryDto.newCategoryDto().id(2L).name("test2").description("two") .build(),
                CategoryDto.newCategoryDto().id(3L).name("test3").description("three") .build()
                );
        Map<Long,CategoryDto> map=list.stream().collect(Collectors.toMap(CategoryDto::getId,Function.identity()));
        System.out.println(map.size());
        Set<Long> ids=new HashSet<>(map.keySet());
        ids.remove(1L);
        ids.remove(2L);

        System.out.println(map.size());

        ids=list.stream().map(CategoryDto::getId).collect(Collectors.toSet());
        ids.remove(1L);
        ids.remove(2L);
        System.out.println(list.size());
    }

    @Test
    public void testStringBuilder(){
        StringBuilder stringBuilder=new StringBuilder();
        System.out.println(stringBuilder.toString());
    }
    @Test
    public void testDate(){
        Date date=new Date();
        System.out.println(DateUtil.formatDate(date,"yyyy-MM-dd 00:00:00"));
        Date date1=DateUtil.parseDate(DateUtil.formatDate(date,"yyyy-MM-dd"));
        System.out.println(111);
    }
    private static final String SEND_DUPLICATE = "send_duplicate";

    @Test
    public void testSplit(){

    }

    @Test
    public void getCpuNum(){
        // get cpu
        System.out.println(Runtime.getRuntime().availableProcessors());
    }

    @Test
    public void testMap(){
        String createIpAddr=null;
        createIpAddr = createIpAddr == null ? null : createIpAddr.trim();
        System.out.println(createIpAddr);
    }
}
