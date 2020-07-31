package com.tools.utils;

public class ObjectUtil {
    public static <T> T getFirstNotNull(T... args) {
        if (args == null || args.length == 0) return null;
        for (int i = 0; i < args.length; i++) {
            if (null!=(args[i])) return args[i];
        }
        return null;
    }
}
