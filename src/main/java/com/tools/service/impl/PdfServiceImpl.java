package com.tools.service.impl;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.ConvertFileDto;
import com.tools.dto.ErrorInfo;
import com.tools.dto.HttpStatus;
import com.tools.service.PdfService;
import com.tools.utils.Constant;
import com.tools.utils.DateUtil;
import com.tools.utils.FileUtil;
import com.tools.utils.MathUtils;
import com.tools.worker.Worker;
import org.apache.commons.lang3.RandomUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.Date;

/**
 * Created by DT254 on 2018/2/22.
 */
@Service
public class PdfServiceImpl implements PdfService {
    @Value("${prefox.file.download.temp}")
    private String downDir;
    @Value("${prefox.file.upload.temp}")
    private String upDir;
    @Override
    public BaseResponseDTO docToPdf(ConvertFileDto convertFileDto) {
        MultipartFile file=convertFileDto.getFile();
        BaseResponseDTO dto= Worker.isNull("file",file);
        if(!Worker.isOK(dto)) return dto;
        if(!(file.getOriginalFilename().endsWith(Constant.DOC)||file.getOriginalFilename().endsWith(Constant.DOCX)|| file
                .getOriginalFilename().endsWith(Constant.TXT))){
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("file")
                    .HttpStatus(HttpStatus.INVALID_FORMAT).build());
        }
        if(convertFileDto.getFile().isEmpty()){
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, ErrorInfo.newErrorInfo().property("file")
                    .HttpStatus(HttpStatus.FILE_EMPTY).build());
        }
        File orig= FileUtil.uploadFile(file,upDir);
        FileUtil.markDir(downDir);
        File dest=new File(downDir
                +File.separator
                +FileUtil.getNamePrefix(file.getOriginalFilename())
                +Constant.PDF);

        return null;
    }
}
