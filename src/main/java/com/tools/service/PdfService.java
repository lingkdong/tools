package com.tools.service;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.ConvertFileDto;
import org.springframework.web.multipart.MultipartFile;

/**
 * Created by DT254 on 2018/2/22.
 */
public interface PdfService {
    BaseResponseDTO docToPdf(ConvertFileDto convertFileDto);
}
