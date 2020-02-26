package com.tools.utils;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.time.DateUtils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by lk on 2018/2/9.
 */
@Slf4j
public class DateUtil {
    public final static  String DATE_FORMAT="yyyy-MM-dd";
    public final static  String G_DATE_FORMAT="G yyyy-MM-dd";
    public final static  String DATE_FORMAT_2="yyyy/MM/dd";
    public final static  String DATE_FORMAT_FULL="yyyyMMddHHmmss";
    public final static  String DATE_FORMAT_FULL2="yyyy-MM-dd HH:mm:ss,SSS";
    public static String formatDate(Date date, String format) {
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        return sdf.format(date);
    }
    public static String formatDate(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat(DATE_FORMAT);
        return sdf.format(date);
    }
    public static Integer getDiffDay(Date startDate,Date endDate){
        try {
            return  (int) (((DateUtils.parseDate(formatDate(startDate,DATE_FORMAT),DATE_FORMAT)).getTime() - (DateUtils.parseDate
                    (formatDate(endDate,DATE_FORMAT),DATE_FORMAT))
                    .getTime()) / 1000 / 60 / 60 / 24);

        } catch (ParseException e) {
            log.error("<DateUtil.getDiffDay failed, {} {} >", e, e.getStackTrace()[0].toString());
        }
        return null;
    }

    public static Date getDiffDate(Long diff){
        Calendar calendar=Calendar.getInstance();
        if(diff!=null){
            calendar.add(Calendar.DATE,diff.intValue());
        }
        return calendar.getTime();
    }

    public static Date parseDate(String str){
        SimpleDateFormat sdf = new SimpleDateFormat(DATE_FORMAT);
        try {
           return sdf.parse(str);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }
}
