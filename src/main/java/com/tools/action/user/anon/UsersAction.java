package com.tools.action.user.anon;

import com.tools.action.BaseAction;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.user.FindUsersParam;
import com.tools.dto.user.UsersDto;
import com.tools.service.UsersService;
import com.tools.worker.Worker;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
public class UsersAction extends BaseAction {
    @Autowired
    private UsersService usersService;

    @RequestMapping(value = "/index")
    public ModelAndView index(FindUsersParam findUsersParam
            , @PageableDefault(value = 28, sort = {"score"}, direction = Sort.Direction.DESC) Pageable pageable) {
        ModelAndView mv = new ModelAndView("users/users");
        /*index begin at 0 but web show 1 so now -1*/
        Page<UsersDto> page = usersService.findUsersDto(findUsersParam, pageable.previousOrFirst());
        mv.addObject("page", page);
        mv.addObject("findUsers", findUsersParam);
        return mv;
    }

    @GetMapping(value = "/card/{username}")
    public ModelAndView index(@PathVariable(value = "username") String username) {
        BaseResponseDTO dto = usersService.findUsersDto(username);
        if (!Worker.isOK(dto)) {
            return errorPage(dto.getStatus(), dto.getMessage());
        }
        ModelAndView mv = new ModelAndView("users/users-card");
        mv.addObject("data", dto.getData());
        return mv;
    }
}
