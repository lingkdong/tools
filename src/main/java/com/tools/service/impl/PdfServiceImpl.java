package com.tools.service.impl;

import com.tools.dto.*;
import com.tools.service.FileService;
import com.tools.service.OpenOfficeService;
import com.tools.service.PdfService;
import com.tools.utils.Constant;
import com.tools.constants.FileChannelEnum;
import com.tools.utils.FileUtil;
import com.tools.worker.Worker;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.*;

/**
 * Created by lk on 2018/2/22.
 */
@Service
@Slf4j
@Deprecated
public class PdfServiceImpl implements PdfService {
    @Autowired
    private OpenOfficeService openOfficeService;
    @Autowired
    private FileService fileService;
    private final static List<String>WORD_TYPE= Arrays.asList(Constant.DOC,
            Constant.DOCX,
            Constant.TXT,
            Constant.RTF,
            Constant.HTML,
            Constant.WPD);
    private final static List<String>EXCEL_TYPE= Arrays.asList(Constant.CSV,
            Constant.XLS,
            Constant.XLSX,
            Constant.TSV);
    private final static List<String>PPT_TYPE= Arrays.asList(Constant.PPT,
            Constant.PPTX
    );
    @Override
    public BaseResponseDTO docToPdf(ConvertFileDto convertFileDto) {
        return  fileToPdf(convertFileDto,WORD_TYPE);
    }

    @Override
    public BaseResponseDTO excelToPdf(ConvertFileDto convertFileDto) {
        return fileToPdf(convertFileDto,EXCEL_TYPE);
    }

    @Override
    public BaseResponseDTO pptToPdf(ConvertFileDto convertFileDto) {
        return fileToPdf(convertFileDto,PPT_TYPE);
    }

    @Override
    public File getFile(DownloadDto downloadDto) {
        if (StringUtils.isBlank(downloadDto.getDownloadName()) || StringUtils.isBlank(downloadDto.getDateDir())) {
            return null;
        }
        File file = new File(getDownPath(downloadDto.getDateDir(), downloadDto.getDownloadName()));
        if (file.exists()) return file;

        return null;
    }

    private BaseResponseDTO fileToPdf(ConvertFileDto convertFileDto, List<String> from) {
        MultipartFile file = convertFileDto.getFile();
        BaseResponseDTO dto = Worker.isNull("file", file);
        if (!Worker.isOK(dto)) return dto;
        String type = FileUtil.getNameSuffix(file.getOriginalFilename()).toLowerCase();
        if (!(from.contains(type))) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("file")
                    .HttpStatus(HttpStatus.INVALID_FORMAT).build());
        }
        if (convertFileDto.getFile().isEmpty()) {
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("file")
                    .HttpStatus(HttpStatus.FILE_EMPTY).build());
        }
        String dateDir = fileService.getDateDir();
        File orig;
        File dest;
        String namePrefix = FileUtil.getNamePrefix(file.getOriginalFilename());
            orig = FileUtil.uploadFile(file,
                    fileService.getUploadTemp() + File.separator + FileChannelEnum.CONVERT.value()+File.separator + dateDir
                    , namePrefix
                            + "_"
                            + convertFileDto.getToken()
                            + FileUtil.getNameSuffix(file.getOriginalFilename())
            );
          if(orig==null) {
              return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("file")
                      .HttpStatus(HttpStatus.FILE_UPLOAD_ERROR).build());
          }
        try {
            dest = new File(getDownPath(dateDir,
                    FileUtil.getNamePrefix(orig.getName()) + Constant.PDF));

            if (!openOfficeService.convert(orig, dest)) {
                return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("file")
                        .HttpStatus(HttpStatus.FILE_CONVERT_ERROR).build());
            } else {
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
        map.put("downloadName", dest.getName());
        map.put("dateDir", dateDir);
        return Worker.OK(map);
    }

    private String getDownPath(String dateDir, String fileName) {
        return fileService.getDownloadTemp()
                + File.separator
                + dateDir
                + File.separator
                + fileName;
    }
}
