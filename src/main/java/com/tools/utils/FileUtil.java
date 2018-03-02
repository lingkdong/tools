package com.tools.utils;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Base64;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.List;

/**
 * Created by lk on 2018/2/22.
 */
@Slf4j
public class FileUtil {

    public static File uploadFile(MultipartFile multipartFile, String dir) {
        return uploadFile(multipartFile, dir, multipartFile.getOriginalFilename());
    }

    public static File uploadFile(MultipartFile multipartFile, String dir, String fileName) {
        File file;
        BufferedOutputStream out = null;
        try {
            markDir(dir);
            file = new File(dir + File.separator + fileName);
            out = new BufferedOutputStream(new FileOutputStream(file));
            out.write(multipartFile.getBytes());
            out.flush();
            out.close();
        } catch (Exception e) {
            log.error("<FileUtil.uploadFile failed, {} {} >", e, e.getStackTrace()[0].toString());
            return null;
        } finally {
            if (out != null) {
                try {
                    out.close();
                } catch (IOException e) {
                    log.error("<FileUtil.uploadFile failed, {} {} >", e, e.getStackTrace()[0].toString());
                }
            }
        }
        return file;
    }

    public static void markDir(String path) {
        File dir = new File(path);
        if (!dir.exists()) {
            dir.mkdirs();
        }
    }

    public static String getNamePrefix(String fileName) {
        return fileName.substring(0, fileName.lastIndexOf("."));

    }

    public static String getNameSuffix(String fileName) {
        return fileName.substring(fileName.lastIndexOf("."));
    }

    public static String base64(File file) {
        InputStream in = null;
        byte[] data = null;
        //读取图片字节数组
        try {
            in = new FileInputStream(file);
            data = new byte[in.available()];
            in.read(data);
            in.close();
        } catch (IOException e) {
            log.error("<FileUtil.FileBase64 failed, {} {} >", e, e.getStackTrace()[0].toString());
        } finally {
            if (in != null) {
                try {
                    in.close();
                } catch (IOException e) {
                    log.error("<FileUtil.FileBase64 failed, {} {} >", e, e.getStackTrace()[0].toString());
                }
            }
        }
        return new String(Base64.encodeBase64(data));
    }


    public static boolean deleteFilesExcept(String dir, List<String> excepts) {
        File[] files = new File(dir).listFiles();
        if (files != null) {
            for (File file : files) {
                if (!excepts.contains(file.getName().toLowerCase())) {
                    file.delete();
                }
            }
        }
        return true;
    }
}
