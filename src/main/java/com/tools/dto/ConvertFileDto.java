package com.tools.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

/**
 * Created by lk on 2018/2/22.
 */
@Data
public class ConvertFileDto {
    private MultipartFile file;
    private String token;
}
