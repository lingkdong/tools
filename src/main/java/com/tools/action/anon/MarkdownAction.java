package com.tools.action.anon;

import com.tools.action.BaseAction;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.MarkdownDto;
import com.tools.service.MarkdownService;
import com.tools.worker.Worker;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;

/**
 * Created by lk on 2018/5/2.
 */
@Controller
@RequestMapping("/anon/markdown")
@Slf4j
public class MarkdownAction extends BaseAction{
    @Autowired
    private MarkdownService markdownService;
    @GetMapping(value="/{type}/index")
    public ModelAndView index(@PathVariable(value = "type") String type) {
        return getResource(type,"markdown/"+type);
    }

    @PostMapping(value = "/download-pdf")
    @ResponseBody
    public Object download(MarkdownDto markdownDto, HttpServletResponse response) {
        try {
            BaseResponseDTO dto=markdownService.downloadPdf(markdownDto.getContent());
            if (!Worker.isOK(dto)) return dto;
            response.addHeader("Content-disposition", "attachment;filename=\"" + new String(markdownDto.getName().getBytes
                    ("gbk"), "iso-8859-1") + ".pdf\"");
            response.setContentType("application/download;charset=UTF-8");
            return dto.getData();
        } catch (Exception e) {
            log.error("<MarkdownAction.download failed, {} {} >", e, e.getStackTrace()[0].toString());
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,"download error");
        }
    }
}
