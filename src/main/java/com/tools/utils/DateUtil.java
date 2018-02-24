package com.tools.utils;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.time.DateUtils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by DT254 on 2018/2/9.
 */
@Slf4j
public class DateUtil {
    public final static  String DATE_FORMAT="yyyy-MM-dd";
    public final static  String G_DATE_FORMAT="G yyyy-MM-dd";
    public final static  String DATE_FORMAT_2="yyyy/MM/dd";
    public final static  String DATE_FORMAT_FULL="yyyyMMddHHmmss";
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

}
