package com.tools.service.impl;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.service.MarkdownService;
import com.tools.utils.MarkdownUtil;
import com.tools.utils.RegUtils;
import com.tools.utils.ToolException;
import com.tools.worker.Worker;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Arrays;

/**
 * Created by lk on 2018/5/8.
 */
@Service
public class MarkdownServiceImpl implements MarkdownService{
    @Value("${fonts.simsun}")
    private String simsun;
    @Override
    public BaseResponseDTO downloadPdf(String html){
        BaseResponseDTO dto = Worker.isBlank2("content", html);
        if (!Worker.isOK(dto)) return dto;
        try {
            if(RegUtils.isContainChinese(html)){
                html=new StringBuilder("<!DOCTYPE html>\n" +
                        "<html>\n" +
                        "<head>\n" +
                        "    <meta charset=\"UTF-8\"/>\n" +
                        "    <style>\n" +
                        "        body{\n" +
                        "            font-family:SimSun;\n" +
                        "            font-size:14px;\n" +
                        "        }\n" +
                        "    </style>\n" +
                        "</head>\n" +
                        "<body>")
                        .append(html
                        ).append
                        ("</body>\n" +
                                "</html>").toString();

                return Worker.OK(MarkdownUtil.htmlToPdf(html,Arrays.asList(simsun))) ;
            } else {
                return Worker.OK(MarkdownUtil.htmlToPdf(html));
            }
        } catch (ToolException e) {
          return new BaseResponseDTO(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
