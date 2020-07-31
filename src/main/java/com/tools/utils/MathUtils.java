package com.tools.utils;

import org.apache.commons.lang3.RandomUtils;

import java.math.BigDecimal;

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

    public static BigDecimal addNullToZero(BigDecimal... args) {
        if (args == null || args.length == 0) return BigDecimal.ZERO;
        BigDecimal sum = BigDecimal.ZERO;
        for (int i = 0; i < args.length; i++) {
            if (null != args[i]) sum = sum.add(args[i]);
        }
        return sum;
    }

    public static BigDecimal addNullToZero(Double... args) {
        if (args == null || args.length == 0) return BigDecimal.ZERO;
        BigDecimal sum = BigDecimal.ZERO;
        for (int i = 0; i < args.length; i++) {
            if (null != args[i]) sum = sum.add(new BigDecimal(args[i].toString()));
        }
        return sum;
    }
    public static BigDecimal addNullToZero(Float... args) {
        if (args == null || args.length == 0) return BigDecimal.ZERO;
        BigDecimal sum = BigDecimal.ZERO;
        for (int i = 0; i < args.length; i++) {
            if (null != args[i]) sum = sum.add(new BigDecimal(args[i].toString()));
        }
        return sum;
    }

    public static BigDecimal subtractNullToZero(BigDecimal... args) {
        if (args == null || args.length == 0) return BigDecimal.ZERO;
        BigDecimal subtract = BigDecimal.ZERO;
        for (int i = 0; i < args.length; i++) {
            if (i == 0) {
                if (null != args[i]) subtract = args[0];
            } else {
                if (null != args[i]) subtract = subtract.subtract(args[i]);
            }
        }
        return subtract;
    }

    public static BigDecimal subtractNullToZero(Double... args) {
        BigDecimal[] params = new BigDecimal[args.length];
        for (int i = 0; i < args.length; i++) {
            BigDecimal item = BigDecimal.ZERO;
            if (null != args[i]) {
                item = new BigDecimal(args[i].toString());
            }
            params[i] = item;
        }
        return subtractNullToZero(params);
    }

    public static BigDecimal multiplyNullToZero(BigDecimal... args) {
        if (args == null || args.length == 0) return BigDecimal.ZERO;
        BigDecimal multiply = BigDecimal.ONE;
        for (int i = 0; i < args.length; i++) {
            if (i == 0) {
                if (null != args[i]) multiply = args[0];
            } else {
                if (null != args[i]) multiply = multiply.multiply(args[i]);
            }
        }
        return multiply;
    }

    public static BigDecimal multiplyNullToZero(Double... args) {
        BigDecimal[] params = new BigDecimal[args.length];
        for (int i = 0; i < args.length; i++) {
            BigDecimal item = BigDecimal.ZERO;
            if (null != args[i]) {
                item = new BigDecimal(args[i].toString());
            }
            params[i] = item;
        }
        return multiplyNullToZero(params);
    }


    public static Long addNullToZero(Long... args) {
        if (args == null || args.length == 0) return 0L;
        Long sum = 0L;
        for (int i = 0; i < args.length; i++) {
            if (null != args[i]) sum = sum + (args[i]);
        }
        return sum;
    }

    public static Long subtractNullToZero(Long... args) {
        if (args == null || args.length == 0) return 0L;
        Long subtract = 0L;
        for (int i = 0; i < args.length; i++) {
            if (i == 0) {
                if (null != args[i]) subtract = args[0];
            } else {
                if (null != args[i]) subtract = subtract - (args[i]);
            }
        }
        return subtract;
    }

    public static Integer toInteger(Object arg){
        if(arg!=null){
            return Integer.valueOf(arg.toString());
        }
        return null;
    }

    public static Long toLong(Object arg){
        if(arg!=null){
            return Long.valueOf(arg.toString());
        }
        return null;
    }
}
