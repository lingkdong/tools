package com.tools.action.navigation.anon;

import com.tools.action.BaseAction;
import com.tools.dto.BaseResponseDTO;
import com.tools.service.SiteNavService;
import com.tools.worker.Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by lk on 2017/11/17.
 */
@Controller
@RequestMapping("/anon/navigation")
public class NavigationIndexAction extends BaseAction {
    @Autowired
    private SiteNavService siteNavService;
    @GetMapping(value = "/{type}/index")
    public ModelAndView index(@PathVariable(value = "type") String type) {
        ModelAndView modelAndView= getResource(type, "navigation/" + type);
        BaseResponseDTO responseDTO= siteNavService.findByResourceCode(type);
        if(Worker.isOK(responseDTO)){
            modelAndView.addObject("siteNavDtos",responseDTO.getData());
        }
        return  modelAndView;
    }


}
