package com.tools.service;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.ConvertFileDto;
import com.tools.dto.DownloadDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

/**
 * Created by DT254 on 2018/2/22.
 */
public interface PdfService {
    BaseResponseDTO docToPdf(ConvertFileDto convertFileDto);

    BaseResponseDTO excelToPdf(ConvertFileDto convertFileDto);

    File getFile(DownloadDto downloadDto);
}
