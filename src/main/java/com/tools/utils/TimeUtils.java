package com.tools.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by DT254 on 2017/11/22.
 */
public class TimeUtils {
    public final static String yyyyMMddHHmmssSSS="yyyyMMddHHmmssSSS";
    public static String format(Date date,String format){
        return new SimpleDateFormat(format).format(date);
    }
}
