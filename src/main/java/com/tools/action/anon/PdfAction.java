package com.tools.action.anon;

import com.tools.action.BaseAction;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.ConvertFileDto;
import com.tools.dto.DownloadDto;
import com.tools.dto.HttpStatus;
import com.tools.service.PdfService;
import com.tools.utils.DateUtil;
import com.tools.utils.MathUtils;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.Date;

/**
 * Created by lk on 2018/2/12.
 */
@Controller
@RequestMapping("/anon/pdf")
@Slf4j
@Deprecated
public class PdfAction extends BaseAction {
    @Autowired
    private PdfService pdfService;

    @GetMapping(value = "/{type}/index")
    public ModelAndView index(@PathVariable(value = "type") String type) {
        return getResource(type, "pdf/" + type);
    }

    @PostMapping(value = "/doc-pdf")
    @ResponseBody
    public BaseResponseDTO docToPdf(ConvertFileDto convertFileDto) {
        convertFileDto.setToken(DateUtil.formatDate(new Date(),DateUtil.DATE_FORMAT_FULL)+"_"+ MathUtils.getRandom(6));
        return pdfService.docToPdf(convertFileDto);
    }

    @PostMapping(value = "/excel-pdf")
    @ResponseBody
    public BaseResponseDTO excelToPdf(ConvertFileDto convertFileDto) {
        convertFileDto.setToken(DateUtil.formatDate(new Date(),DateUtil.DATE_FORMAT_FULL)+"_"+ MathUtils.getRandom(6));
        return pdfService.excelToPdf(convertFileDto);
    }

    @PostMapping(value = "/ppt-pdf")
    @ResponseBody
    public BaseResponseDTO pptToPdf(ConvertFileDto convertFileDto) {
        convertFileDto.setToken(DateUtil.formatDate(new Date(),DateUtil.DATE_FORMAT_FULL)+"_"+ MathUtils.getRandom(6));
        return pdfService.pptToPdf(convertFileDto);
    }

    @GetMapping(value = "/download")
    @ResponseBody
    public Object download(DownloadDto downloadDto,HttpServletResponse response) {
        try {
            File file=pdfService.getFile(downloadDto);
            if(file==null) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,"file not found");
            response.addHeader("Content-disposition", "attachment;filename=\""+ new String(downloadDto.getName().getBytes
                            ("gbk"), "iso-8859-1")+"\"");
            response.setContentType("application/download;charset=UTF-8");
            InputStream is = new FileInputStream(file);
            IOUtils.copy(is, response.getOutputStream());
            response.flushBuffer();
            is.close();
        } catch (Exception e) {
            log.error("<PdfAction.download failed, {} {} >", e, e.getStackTrace()[0].toString());
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,"download error");
        }
        return  new BaseResponseDTO(HttpStatus.PARAM_INCORRECT);
    }
}