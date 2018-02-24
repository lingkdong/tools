package com.tools.action.anon;

import com.tools.action.BaseAction;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.ConvertFileDto;
import com.tools.service.PdfService;
import com.tools.utils.DateUtil;
import com.tools.utils.MathUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.util.Date;

/**
 * Created by DT254 on 2018/2/12.
 */
@Controller
@RequestMapping("/tools/anon/pdf")
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
}