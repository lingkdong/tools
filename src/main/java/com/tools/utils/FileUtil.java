package com.tools.utils;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;

/**
 * Created by DT254 on 2018/2/22.
 */
@Slf4j
public class FileUtil {

    public static File uploadFile(MultipartFile multipartFile,String dir){
        File file=null;
        try {
            markDir(dir);
            file=new File(dir+File.separator+multipartFile .getOriginalFilename());
            BufferedOutputStream out = new BufferedOutputStream(new FileOutputStream(file));
            out.write(multipartFile.getBytes());
            out.flush();
            out.close();
        } catch (FileNotFoundException e) {
            log.error("<FileUtil.uploadFile failed, {} {} >", e, e.getStackTrace()[0].toString());
        } catch (IOException e) {
            log.error("<FileUtil.uploadFile failed, {} {} >", e, e.getStackTrace()[0].toString());
        }
        return file;
    }

    public static void markDir(String path){
        File dir = new File(path);
        if (!dir.exists()) {
            dir.mkdirs();
        }
    }

    public static String getNamePrefix(String fileName){
        return fileName.substring(0,fileName.lastIndexOf("."));
    }

}
