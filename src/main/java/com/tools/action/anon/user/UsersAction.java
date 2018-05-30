package com.tools.action.anon.user;

import com.tools.dto.user.FindUsersDto;
import com.tools.dto.user.UsersDto;
import com.tools.service.UsersService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by lk on 2018/2/5.
 */
@Controller
@Slf4j
@RequestMapping("/anon/users")
public class UsersAction {
    @Autowired
    private UsersService usersService;
    @RequestMapping(value = "/index")
    public ModelAndView index(FindUsersDto findUsersDto,@PageableDefault(value = 28) Pageable pageable) {
        ModelAndView mv = new ModelAndView("users/users");
        /*index begain at 0 but web show 1 so now -1*/
        Page<UsersDto> page=usersService.findUsersDto(findUsersDto,pageable.previousOrFirst());
        mv.addObject("page",page);
        mv.addObject("findUsers",findUsersDto);
        return mv;
    }

    @GetMapping(value="/Detail/{username}")
    public ModelAndView index(@PathVariable(value = "username") String username){
        ModelAndView mv = new ModelAndView("users/users");
        return mv;
    }
}
