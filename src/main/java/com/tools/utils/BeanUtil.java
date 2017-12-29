package com.tools.utils;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.beanutils.BeanUtils;

import java.lang.reflect.InvocationTargetException;

/**
 * Created by DT254 on 2017/11/14.
 */
public class BeanUtil extends BeanUtils {
    public static void copy(Object dest, Object orig){
        try {
            copyProperties(dest,orig);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
    }

    public static  <T> T cast(Class<T> type,Object orig){
        try {
             Object dest=type.newInstance();
            copy(dest,orig);
            return (T)dest;
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        return null;
    }
}
