package com.tools.action.authc.user;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.user.CompleteDto;
import com.tools.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by DT254 on 2018/1/18.
 */
@Controller
@RequestMapping("/tools/authc/user")
public class AuthUserAction {
    @Autowired
    private UserService userService;
    @GetMapping(value = "/complete")
    public ModelAndView complete() {
        ModelAndView mv=new ModelAndView("user/complete");
        return mv;
    }

    @PostMapping(value = "sendComplete")
    @ResponseBody
    public BaseResponseDTO sendComplete(CompleteDto completeDto)
    {
        return userService.complete(completeDto);
    }

}

