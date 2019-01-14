package com.tools.action.user.authc;

import com.tools.action.BaseAction;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.user.CompleteDto;
import com.tools.dto.user.SaveChangeParam;
import com.tools.dto.user.ViewChangeDto;
import com.tools.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.util.Calendar;

/**
 * authc:Access methods in this class requires user login
 * Created by lk on 2018/1/18.
 */
@Controller
@RequestMapping("/authc/user")
public class AuthUserAction extends BaseAction {
    @Autowired
    private UserService userService;

    @GetMapping(value = "/complete")
    public ModelAndView complete() {
        BaseResponseDTO dto = userService.getComplete();
        if (dto.getStatus() != null && dto.getStatus().equals(HttpStatus.LOGIN_EXPIRED.value())) {
            return new ModelAndView("user/login");
        }
        ModelAndView mv = new ModelAndView("user/complete");
        CompleteDto completeDto = (CompleteDto) dto.getData();
        if (completeDto != null && completeDto.getBirthday() != null) {
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(completeDto.getBirthday());
            addBirthAttribute(mv, calendar);
        }
        mv.addObject("complete", dto.getData());
        return mv;
    }

    @PostMapping(value = "send-complete")
    @ResponseBody
    public BaseResponseDTO sendComplete(CompleteDto completeDto) {
        return userService.complete(completeDto);
    }

    @GetMapping(value = "/change")
    public ModelAndView change() {
        BaseResponseDTO dto = userService.getChange();
        if (dto.getStatus() != null && dto.getStatus().equals(HttpStatus.LOGIN_EXPIRED.value())) {
            return new ModelAndView("user/login");
        }
        ModelAndView mv = new ModelAndView("user/change");
        ViewChangeDto changeDto = (ViewChangeDto) dto.getData();
        if (changeDto != null && changeDto.getBirthday() != null) {
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(changeDto.getBirthday());
            addBirthAttribute(mv, calendar);
        }
        mv.addObject("data", dto.getData());
        return mv;
    }

    @PostMapping(value = "send-change")
    @ResponseBody
    public BaseResponseDTO sendChange(SaveChangeParam saveChangeParam) {
        return userService.change(saveChangeParam);
    }

    @PostMapping(value = "/avatar")
    @ResponseBody
    public BaseResponseDTO avatar(MultipartFile file) {
        return userService.avatar(file);
    }

    @PostMapping(value = "/get-avatar")
    @ResponseBody
    public BaseResponseDTO getAvatar() {
        return userService.getAvatar();
    }
}

