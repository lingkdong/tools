package com.tools.action.anon;

import com.tools.action.BaseAction;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.MarkdownDto;
import com.tools.service.MarkdownService;
import com.tools.utils.MathUtils;
import com.tools.utils.TimeUtils;
import com.tools.worker.SessionWorker;
import com.tools.worker.Worker;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

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

    @PostMapping(value = "/store-pdf")
    @ResponseBody
    public Object store(MarkdownDto markdownDto,HttpServletRequest request) {
        try {
            BaseResponseDTO dto=markdownService.downloadPdf(markdownDto.getHtml());
            if (!Worker.isOK(dto)) return dto;
            String token= TimeUtils.format(new Date(), TimeUtils.yyyyMMddHHmmssSSS)+ MathUtils.getRandom(6);
            Map<String,Object> obj=new HashMap<>();
            obj.put("name",markdownDto.getName());
            obj.put("content",dto.getData());
            SessionWorker.setInterval(request.getSession(), SessionWorker.TEN_MINUTE).setAttribute(token,obj);
            return Worker.OK(token);
        } catch (Exception e) {
            log.error("<MarkdownAction.download failed, {} {} >", e, e.getStackTrace()[0].toString());
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,"download error");
        }
    }

    @GetMapping(value = "/get-pdf")
    @ResponseBody
    public Object getPdf(String token,HttpServletRequest request, HttpServletResponse response) {
        try {
            Map<String,Object> obj= (Map<String, Object>) request.getSession().getAttribute(token);
            String name=(obj.get("name")==null)?"":obj.get("name").toString();
            response.addHeader("Content-disposition", "attachment;filename=\"" + new String(name.getBytes
                    ("gbk"), "iso-8859-1") + ".pdf\"");
            response.setContentType("application/download;charset=UTF-8");
            return obj.get("content");
        } catch (Exception e) {
            log.error("<MarkdownAction.download failed, {} {} >", e, e.getStackTrace()[0].toString());
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,"download error");
        }  finally {
            request.getSession().removeAttribute(token);
        }
    }
}
