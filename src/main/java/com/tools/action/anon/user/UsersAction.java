package com.tools.action.anon.user;

import com.tools.dto.user.FindUsersDto;
import com.tools.dto.user.UsersDto;
import com.tools.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by DT254 on 2018/2/5.
 */
@Controller
@Slf4j
@RequestMapping("/tools/anon/users")
public class UsersAction {
    @Autowired
    private UserService userService;
    @RequestMapping(value = "/index")
    public ModelAndView index(FindUsersDto findUsersDto,@PageableDefault(value = 1) Pageable pageable) {
        ModelAndView mv = new ModelAndView("user/users");
        /*index begain at 0 but web show 1 so now -1*/
        Page<UsersDto> page=userService.findUsersDto(findUsersDto,pageable.previousOrFirst());
        mv.addObject("page",page);
        mv.addObject("findUsers",findUsersDto);
        return mv;
    }

}
