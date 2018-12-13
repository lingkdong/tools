package com.tools.action.anon.issue;

import com.tools.dto.issue.IssuesParam;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * issues page
 *
 * @Author: dongxin
 * @Date: 2018/7/13 14:43
 **/
@Controller
@RequestMapping("/anon/issues")
public class IssuesAction {
    @RequestMapping(value = "/list")
    public ModelAndView list(IssuesParam issuesParam,
                             @PageableDefault(value = 25) Pageable pageable) {
        /*index begin at 0 but web show 1 so now -1*/
        ModelAndView mv = new ModelAndView("issue/issues");
        mv.addObject("issuesParam",issuesParam);
        return mv;
    }
}
