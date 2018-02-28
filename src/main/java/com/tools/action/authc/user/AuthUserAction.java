package com.tools.action.authc.user;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.user.ViewChangeDto;
import com.tools.dto.user.CompleteDto;
import com.tools.dto.user.SaveChangeDto;
import com.tools.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.util.Calendar;

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
        BaseResponseDTO dto=userService.getComplete();
        if(dto.getStatus()!=null&&dto.getStatus().equals(HttpStatus.LOGIN_EXPIRED.value())){
            return new ModelAndView("user/login");
        }
        ModelAndView mv=new ModelAndView("user/complete");
        CompleteDto completeDto= (CompleteDto) dto.getData();
        if(completeDto!=null&&completeDto.getBirthday()!=null){
            Calendar calendar=Calendar.getInstance();
            calendar.setTime(completeDto.getBirthday());
            mv.addObject("birthYear",calendar.get(Calendar.YEAR));
            mv.addObject("birthMonth",calendar.get(Calendar.MONTH)+1);
            mv.addObject("birthday",calendar.get(Calendar.DATE));
        }
        mv.addObject("complete",dto.getData());
        return mv;
    }

    @PostMapping(value = "send-complete")
    @ResponseBody
    public BaseResponseDTO sendComplete(CompleteDto completeDto)
    {
        return userService.complete(completeDto);
    }

    @GetMapping(value = "/change")
    public ModelAndView change() {
        BaseResponseDTO dto=userService.getChange();
        if(dto.getStatus()!=null&&dto.getStatus().equals(HttpStatus.LOGIN_EXPIRED.value())){
            return new ModelAndView("user/login");
        }
        ModelAndView mv=new ModelAndView("user/change");
        ViewChangeDto changeDto= (ViewChangeDto) dto.getData();
        if(changeDto!=null&&changeDto.getBirthday()!=null){
            Calendar calendar=Calendar.getInstance();
            calendar.setTime(changeDto.getBirthday());
            mv.addObject("birthYear",calendar.get(Calendar.YEAR));
            mv.addObject("birthMonth",calendar.get(Calendar.MONTH)+1);
            mv.addObject("birthday",calendar.get(Calendar.DATE));
        }
        mv.addObject("data",dto.getData());
        return mv;
    }

    @PostMapping(value = "send-change")
    @ResponseBody
    public BaseResponseDTO sendChange(SaveChangeDto saveChangeDto)
    {
        return userService.change(saveChangeDto);
    }

    @PostMapping(value = "/avatar")
    @ResponseBody
    public BaseResponseDTO avatar(MultipartFile file) {
         return userService.avatar(file);
    }
}

