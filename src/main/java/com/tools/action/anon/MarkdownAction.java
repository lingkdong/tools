package com.tools.action.anon;

import com.tools.action.BaseAction;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.MarkdownDto;
import com.tools.service.MarkdownService;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
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
public class MarkdownAction extends BaseAction{
    @Autowired
    private MarkdownService markdownService;
    @GetMapping(value="/{type}/index")
    public ModelAndView index(@PathVariable(value = "type") String type) {
        return getResource(type,"markdown/"+type);
    }

    @GetMapping(value = "/download-pdf")
    @ResponseBody
    public Object download(MarkdownDto markdownDto, HttpServletResponse response) {
//        try {
//            File file=pdfService.getFile(downloadDto);
//            if(file==null) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,"file not found");
//            response.addHeader("Content-disposition", "attachment;filename=\""+ new String(downloadDto.getName().getBytes
//                    ("gbk"), "iso-8859-1")+"\"");
//            response.setContentType("application/download;charset=UTF-8");
//            InputStream is = new FileInputStream(file);
//            IOUtils.copy(is, response.getOutputStream());
//            response.flushBuffer();
//            is.close();
//        } catch (Exception e) {
//            log.error("<PdfAction.download failed, {} {} >", e, e.getStackTrace()[0].toString());
//            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,"download error");
//        }
        return  new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
    }
}
