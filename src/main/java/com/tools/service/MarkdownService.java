package com.tools.service;

import com.tools.dto.BaseResponseDTO;

/**
 * Created by lk on 2018/5/8.
 */
public interface MarkdownService {
    BaseResponseDTO downloadPdf(String markdown);
}
