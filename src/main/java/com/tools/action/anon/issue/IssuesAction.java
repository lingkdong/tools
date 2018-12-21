package com.tools.action.anon.issue;

import com.tools.constants.IssueStatus;
import com.tools.dto.issue.FindIssuesParam;
import com.tools.dto.issue.ViewIssuesDto;
import com.tools.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
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
    @Autowired
    private IssueService issueService;
    @RequestMapping(value = "/list")
    public ModelAndView list(FindIssuesParam findIssuesParam,
                             @PageableDefault(value = 25) Pageable pageable) {
        /*index begin at 0 but web show 1 so now -1*/
        ModelAndView mv = new ModelAndView("issue/issues");
        if(findIssuesParam.getStatus()==null) findIssuesParam.setStatus(IssueStatus.OPEN.code());
        Page<ViewIssuesDto> page = issueService.findIssues(findIssuesParam, pageable.previousOrFirst());
        mv.addObject("page", page);
        mv.addObject("findIssuesParam", findIssuesParam);
        mv.addObject("issueStatusDtos", issueService.getStatusStatistics());
        return mv;
    }
}
