package com.tools.service.impl;

import com.tools.service.FileService;
import com.tools.utils.DateUtil;
import com.tools.utils.FileUtil;
import com.tools.utils.RegUtils;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.Date;

/**
 * Created by lk on 2018/3/9.
 */
@Service
@Slf4j
public class FileServiceImpl implements FileService {
    @Value("${prefox.file.upload.basic}")
    private String upBasic;
    @Value("${prefox.file.upload.temp}")
    private String upTempDir;
    @Value("${prefox.file.download.temp}")
    private String downTempDir;

    @Override
    public String getUploadBase() {
        FileUtil.markDir(upBasic);
        FileUtil.markDir(upBasic);
        return upBasic;
    }

    @Override
    public String getUploadTemp() {
        FileUtil.markDir(upTempDir);
        return upTempDir;
    }

    @Override
    public String getDownloadTemp() {
        FileUtil.markDir(downTempDir);
        return downTempDir;
    }

    @Override
    public String getDateDir() {
        return DateUtil.formatDate(new Date());
    }
    /**
     * delete temp dir one day ago
     */
    @Override
    public boolean delUploadTemp() {
        try {
            delTemp(getUploadTemp());
            return true;
        }catch (Exception e){
            log.error("<FileServiceImpl.delUploadTemp failed, {} {}  >", e, e.getStackTrace  ()[0].toString());
        }
        return false;
    }
    /**
     * delete temp dir one day ago
     */
    @Override
    public boolean delDownTemp() {
        try {
            delTemp(getDownloadTemp());
            return true;
        }catch (Exception e){
            log.error("<FileServiceImpl.delDownTemp failed, {} {}  >", e, e.getStackTrace  ()[0].toString());
        }
        return false;
    }

    private void delTemp(String dir) throws Exception{
        Date date=DateUtil.getDiffDate(-1L);
        File parent=new File(dir);
        File[] files=parent.listFiles();
        for(File file:files){
            if(file.isDirectory()&& RegUtils.isDate(file.getName())){
                Date dirDate=DateUtil.parseDate(file.getName());
                if(dirDate!=null && date.after(dirDate)){
                    FileUtils.deleteDirectory(file);
                }
            }
        }
    }
}
