package com.tools.action.issue.anon;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created with IntelliJ IDEA.
 * User: lkdong
 * Date: 18-6-5
 * Time: 下午11:05
 * To change this template use File | Settings | File Templates.
 */
@Controller
@RequestMapping("/anon/issue")
public class IssueAction {
    @RequestMapping(value = "/{issueId}")
    public ModelAndView index(@PathVariable(value = "issueId") Long issueId) {
        ModelAndView mv = new ModelAndView("issue/issue");
        return mv;
    }

}
