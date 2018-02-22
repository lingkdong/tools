package com.tools.action.anon;

import com.tools.action.BaseAction;
import com.tools.dto.BaseResponseDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by DT254 on 2018/2/12.
 */
@Controller
@RequestMapping("/tools/anon/pdf")
public class PdfAction extends BaseAction{
    @GetMapping(value="/{type}/index")
    public ModelAndView index(@PathVariable(value = "type") String type) {
        return getResource(type,"pdf/"+type);
    }
    @PostMapping(value = "/doc-pdf")
    @ResponseBody
    public BaseResponseDTO docToPdf(@RequestParam("file")MultipartFile file){

    }
}