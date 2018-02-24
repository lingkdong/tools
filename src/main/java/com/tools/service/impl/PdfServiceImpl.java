package com.tools.service.impl;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.ConvertFileDto;
import com.tools.dto.ErrorInfo;
import com.tools.dto.HttpStatus;
import com.tools.service.OpenOfficeService;
import com.tools.service.PdfService;
import com.tools.utils.Constant;
import com.tools.utils.DateUtil;
import com.tools.utils.FileUtil;
import com.tools.worker.Worker;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by DT254 on 2018/2/22.
 */
@Service
@Slf4j
public class PdfServiceImpl implements PdfService {
    @Value("${prefox.file.download.temp}")
    private String downDir;
    @Value("${prefox.file.upload.temp}")
    private String upDir;
    @Autowired
    private OpenOfficeService openOfficeService;

    @Override
    public BaseResponseDTO docToPdf(ConvertFileDto convertFileDto) {
        MultipartFile file = convertFileDto.getFile();
        BaseResponseDTO dto = Worker.isNull("file", file);
        if (!Worker.isOK(dto)) return dto;
        if (!(file.getOriginalFilename().endsWith(Constant.DOC) || file.getOriginalFilename().endsWith(Constant.DOCX) || file
                .getOriginalFilename().endsWith(Constant.TXT))) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("file")
                    .HttpStatus(HttpStatus.INVALID_FORMAT).build());
        }
        if (convertFileDto.getFile().isEmpty()) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("file")
                    .HttpStatus(HttpStatus.FILE_EMPTY).build());
        }
        String dateDir = DateUtil.formatDate(new Date());
        File orig;
        File dest;
        String namePrefix = FileUtil.getNamePrefix(file.getOriginalFilename());
        try {
            orig = FileUtil.uploadFile(file, upDir + File.separator + dateDir
                    , namePrefix
                            + "_"
                            + convertFileDto.getToken()
                            + FileUtil.getNameSuffix(file.getOriginalFilename())
            );
        } catch (Exception e) {
            log.error("<PdfServiceImpl.docToPdf.uploadFile failed, {} {} >", e, e.getStackTrace()[0].toString());
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("file")
                    .HttpStatus(HttpStatus.FILE_UPLOAD_ERROR).build());
        }
        boolean flag=false;
        try {
            FileUtil.markDir(downDir);
            dest = new File(downDir
                    + File.separator
                    + dateDir
                    + File.separator
                    + FileUtil.getNamePrefix(orig.getName())
                    + Constant.PDF);
            if (!openOfficeService.convert(orig, dest)) {
                return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("file")
                        .HttpStatus(HttpStatus.FILE_CONVERT_ERROR).build());
            }else {
                //delete orig
                orig.delete();
            }
        } catch (Exception e) {
            log.error("<PdfServiceImpl.docToPdf.convert failed, {} {} >", e, e.getStackTrace()[0].toString());
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("file")
                    .HttpStatus(HttpStatus.FILE_CONVERT_ERROR).build());
        }
        Map map = new HashMap();
        map.put("name", namePrefix + Constant.PDF);
        map.put("downLoadName", dest.getName());
        map.put("date", dateDir);
        return Worker.OK(map);
    }
}
