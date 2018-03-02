package com.tools.utils;

import org.apache.commons.lang3.RandomUtils;

/**
 * Created by lk on 2017/11/22.
 */
public class MathUtils {
    public static String getRandom(int num){
        StringBuilder builder=new StringBuilder();
        for(int i=0;i<num;i++){
            builder.append(RandomUtils.nextInt(0,9));
        }
        return builder.toString();
    }
}
