package com.tools.service;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.ConvertFileDto;
import com.tools.dto.DownloadDto;

import java.io.File;

/**
 * Created by lk on 2018/2/22.
 */
@Deprecated
public interface PdfService {
    BaseResponseDTO docToPdf(ConvertFileDto convertFileDto);

    BaseResponseDTO excelToPdf(ConvertFileDto convertFileDto);

    BaseResponseDTO pptToPdf(ConvertFileDto convertFileDto);

    File getFile(DownloadDto downloadDto);
}
