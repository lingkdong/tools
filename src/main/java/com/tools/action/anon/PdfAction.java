package com.tools.action.anon;

import com.tools.action.BaseAction;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
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
}
