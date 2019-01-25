package com.tools.action.issue.authc;

import com.tools.constants.IssueLabel;
import com.tools.dto.user.UsersDto;
import com.tools.model.User;
import com.tools.service.UsersService;
import com.tools.worker.Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created with IntelliJ IDEA.
 * User: lkdong
 * Date: 18-6-7
 * Time: 下午9:41
 * To change this template use File | Settings | File Templates.
 */
@Controller
@RequestMapping("/auth/issue")
public class AuthIssueAction {
    @Autowired
    private UsersService usersService;
    @RequestMapping(value = "/new")
    public ModelAndView newIssues() {
        ModelAndView mv = new ModelAndView("issue/new-issue");
        User sessionUser = Worker.getCurrentUser();
        if(sessionUser!=null){
            UsersDto usersDto=usersService.toDto(sessionUser);
            mv.addObject("issueLabels", IssueLabel.values());
            mv.addObject("defaultLabel", IssueLabel.UNLABELED);
            mv.addObject("user",usersDto);
        }
        return mv;
    }
}
