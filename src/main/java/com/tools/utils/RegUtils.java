package com.tools.utils;

import org.apache.commons.lang3.StringUtils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by DT254 on 2018/1/9.
 */
public class RegUtils {
    private static boolean match(String regex, String str) {
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(str);
        return matcher.matches();
    }

    /*
    *字母,数字,下划线.
    */
    public static boolean isUsername(String str) {
        if (StringUtils.isNotBlank(str)) {
            String regex = "[A-Za-z0-9_]+$";
            return match(regex, str);
        }
        return false;
    }

    public static boolean isEmail(String str) {
        String regex = "^([\\w-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([\\w-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$";
        return match(regex, str);
    }
}
