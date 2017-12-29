package com.tools.action.raw;
import com.tools.utils.MathUtils;
import com.tools.utils.TimeUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;

/**
 * Created by DT254 on 2017/11/21.
 */
@RestController
@RequestMapping("/tools")
public class RawAction {
    @PostMapping(value = "/store-raw")
    public String open(
            HttpServletRequest request,
            @RequestParam(value = "v", required = false) String v
    ) {
        String version=TimeUtils.format(new Date(),TimeUtils.yyyyMMddHHmmssSSS)+ MathUtils.getRandom(6);
        HttpSession session=request.getSession();
        session.setMaxInactiveInterval(60*60);
        session.setAttribute(version,v);
        return version;
    }
}
