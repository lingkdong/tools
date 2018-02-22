package com.tools.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

/**
 * Created by DT254 on 2018/2/22.
 */
@Data
public class ConvertFileDto {
    private MultipartFile file;
}
