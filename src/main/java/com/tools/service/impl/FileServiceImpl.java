package com.tools.service.impl;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.ErrorInfo;
import com.tools.dto.HttpStatus;
import com.tools.dto.UploadFileDto;
import com.tools.service.FileService;
import com.tools.utils.DateUtil;
import com.tools.utils.FileUtil;
import com.tools.utils.MathUtils;
import com.tools.utils.RegUtils;
import com.tools.worker.Worker;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
    @Value("${prefox.nginx}")
    private  String nginxUrl;
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
        } catch (Exception e) {
            log.error("<FileServiceImpl.delUploadTemp failed, {} {}  >", e, e.getStackTrace()[0].toString());
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
        } catch (Exception e) {
            log.error("<FileServiceImpl.delDownTemp failed, {} {}  >", e, e.getStackTrace()[0].toString());
        }
        return false;
    }

    private void delTemp(String dir) throws Exception {
        Date date = DateUtil.getDiffDate(-1L);
        File parent = new File(dir);
        File[] files = parent.listFiles();
        for (File file : files) {
            if (file.isDirectory() && RegUtils.isDate(file.getName())) {
                Date dirDate = DateUtil.parseDate(file.getName());
                if (dirDate != null && date.after(dirDate)) {
                    FileUtils.deleteDirectory(file);
                }
            }
        }
    }

    public BaseResponseDTO detectFileDto(UploadFileDto uploadFileDto) {
        MultipartFile file = uploadFileDto.getFile();
        BaseResponseDTO dto = Worker.isNull("file", file);
        if (!Worker.isOK(dto)) return dto;
        dto = Worker.isBlank2("dir", uploadFileDto.getDir());
        if (!Worker.isOK(dto)) return dto;
        return Worker.OK();
    }

    public BaseResponseDTO doUpload(UploadFileDto fileDto){
        String fileName=fileDto.getFile().getOriginalFilename();
        if(StringUtils.isNotBlank(fileDto.getFileName())) fileName=fileDto.getFileName();
        File orig =FileUtil.uploadFile(fileDto.getFile(),fileDto.getDir(),fileName);
        if(orig==null) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("file")
                    .HttpStatus(HttpStatus.FILE_UPLOAD_ERROR).build());
        }
        return Worker.OK(orig);
    }

    public String getTokenFileName(String fileName){
        String token="_"+ MathUtils.getRandom(6);
        return FileUtil.getNamePrefix(fileName)+token+FileUtil.getNameSuffix(fileName);
    }

    public String getNginxUrl(){
        return nginxUrl;
    }
}
