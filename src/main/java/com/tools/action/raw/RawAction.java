package com.tools.action.raw;
import com.tools.utils.MathUtils;
import com.tools.utils.TimeUtils;
import com.tools.worker.SessionWorker;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by DT254 on 2017/11/21.
 */
@RestController
@RequestMapping("/tools")
public class RawAction {
    @PostMapping(value = "/store-raw")
    public String open(
            HttpServletRequest request,
            @RequestParam(value = "v", required = false) String value,
            @RequestParam(value = "type", required = false) String type
    ) {
        String version=TimeUtils.format(new Date(),TimeUtils.yyyyMMddHHmmssSSS)+ MathUtils.getRandom(6);
        Map<String,Object> obj=new HashMap<>();
        obj.put("value",value);
        obj.put("type",type);
        SessionWorker.setInterval(request.getSession(),SessionWorker.HOUR_1).setAttribute(version,obj);
        return version;
    }
}
