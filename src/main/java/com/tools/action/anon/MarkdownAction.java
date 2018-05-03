package com.tools.action.anon;

import com.tools.action.BaseAction;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by lk on 2018/5/2.
 */
@Controller
@RequestMapping("/anon/markdown")
public class MarkdownAction extends BaseAction{
    @GetMapping(value="/{type}/index")
    public ModelAndView index(@PathVariable(value = "type") String type) {
        return getResource(type,"markdown/"+type);
    }
}
