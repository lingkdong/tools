package com.tools.detection;

import com.tools.dto.format.Format;
import org.apache.commons.lang3.StringUtils;

/**
 * Created by lk on 2017/11/8.
 */
public class CheckFormat {
    public static boolean inputBlank(Format format){
        return format==null|| StringUtils.isBlank(format.getInput());
    }
}
