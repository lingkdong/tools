package com.tools.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

/**
 * Created with IntelliJ IDEA.
 * User: lkdong
 * Date: 18-6-7
 * Time: 下午9:49
 * To change this template use File | Settings | File Templates.
 */
@Data
public class UploadFileDto {
    private MultipartFile[] files;
}
