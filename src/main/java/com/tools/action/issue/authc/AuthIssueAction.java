package com.tools.action.issue.authc;

import com.tools.constants.IssueLabel;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.UploadFileDto;
import com.tools.dto.issue.CreateIssueCommentParam;
import com.tools.dto.issue.CreateIssueParam;
import com.tools.dto.user.UsersDto;
import com.tools.model.User;
import com.tools.service.FileService;
import com.tools.service.IssueCommentService;
import com.tools.service.IssueService;
import com.tools.service.UsersService;
import com.tools.worker.Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 * User: lkdong
 * Date: 18-6-7
 * Time: 下午9:41
 * To change this template use File | Settings | File Templates.
 */
@Controller
@RequestMapping("/authc/issue")
public class AuthIssueAction {
    @Autowired
    private UsersService usersService;
    @Autowired
    private IssueService issueService;
    @Autowired
    private FileService fileService;
    @Autowired
    private IssueCommentService issueCommentService;
    @RequestMapping(value = "/new")
    public ModelAndView newIssues() {
        ModelAndView mv = new ModelAndView("issue/new-issue");
        User sessionUser = Worker.getCurrentUser();
        if (sessionUser != null) {
            UsersDto usersDto = usersService.toDto(sessionUser);
            mv.addObject("issueLabels", IssueLabel.values());
            mv.addObject("defaultLabel", IssueLabel.UNLABELED);
            mv.addObject("user", usersDto);
        }
        return mv;
    }

    @PostMapping(value = "/upload-file")
    @ResponseBody
    public Object uploadFile(UploadFileDto uploadFileDto) {
        BaseResponseDTO dto = issueService.uploadFile(uploadFileDto);
        Map<String, Object> map = new HashMap<>();
        if (!Worker.isOK(dto)) {
            map.put("success", false);
            map.put("msg", dto.getMessage());
        } else {
            map.put("success", true);
            map.put("file_path", fileService.getNginxUrl() + dto.getData());
        }
        return map;
    }
    @PostMapping(value = "/create-issue")
    @ResponseBody
    public BaseResponseDTO createIssue(CreateIssueParam createIssueParam) {
        return issueService.createIssue(createIssueParam);
    }


    @RequestMapping(value = "/{issueId}")
    public ModelAndView index(@PathVariable(value = "issueId") Long issueId) {
        ModelAndView mv = new ModelAndView("issue/issue-comment");
        User sessionUser = Worker.getCurrentUser();
        if (sessionUser != null) {
            UsersDto usersDto = usersService.toDto(sessionUser);
            mv.addObject("user", usersDto);
        }
        mv.addObject("issueData",issueCommentService.getIssueComments(issueId).getData());
        return mv;
    }

    @PostMapping(value = "/create-issue-comment")
    @ResponseBody
    public BaseResponseDTO createIssueComment(CreateIssueCommentParam param) {
        return issueCommentService.createIssueComment(param);
    }
}
