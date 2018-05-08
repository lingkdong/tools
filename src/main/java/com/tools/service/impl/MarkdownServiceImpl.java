package com.tools.service.impl;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.service.MarkdownService;
import com.tools.utils.MarkdownUtil;
import com.tools.utils.ToolException;
import com.tools.worker.Worker;
import org.springframework.stereotype.Service;

/**
 * Created by lk on 2018/5/8.
 */
@Service
public class MarkdownServiceImpl implements MarkdownService{
    @Override
    public BaseResponseDTO downloadPdf(String markdown){
        BaseResponseDTO dto = Worker.isBlank2("content", markdown);
        if (!Worker.isOK(dto)) return dto;
        try {
             return Worker.OK(MarkdownUtil.markdownToPdf(markdown));
        } catch (ToolException e) {
          return new BaseResponseDTO(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
