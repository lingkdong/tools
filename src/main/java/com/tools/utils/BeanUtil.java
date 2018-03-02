package com.tools.utils;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.beanutils.BeanUtils;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

/**
 * Created by lk on 2017/11/14.
 */
@Slf4j
public class BeanUtil extends BeanUtils {
    public static void copy(Object dest, Object orig){
        try {
            BeanUtilBean.getInstance().copyProperties(dest,orig);
        } catch (IllegalAccessException e) {
            log.error("<BeanUtil.copy failed, {} {} >", e, e.getStackTrace()[0].toString());
        } catch (InvocationTargetException e) {
            log.error("<BeanUtil.copy failed, {} {} >", e, e.getStackTrace()[0].toString());
        }
    }

    public static  <T> T cast(Class<T> type,Object orig){
        try {
             Object dest=type.newInstance();
            copy(dest,orig);
            return (T)dest;
        } catch (InstantiationException e) {
            log.error("<BeanUtil.cast failed, {} {} >", e, e.getStackTrace()[0].toString());
        } catch (IllegalAccessException e) {
            log.error("<BeanUtil.cast failed, {} {} >", e, e.getStackTrace()[0].toString());
        }
        return null;
    }

    public static boolean compareAndModify(Object dest, Object orig){
        try {
            return BeanUtilBean.getInstance().compareAndModify(dest,orig);
        } catch (IllegalAccessException e) {
            log.error("<BeanUtil.compareAndModify failed, {} {} >", e, e.getStackTrace()[0].toString());
        } catch (InvocationTargetException e) {
            log.error("<BeanUtil.compareAndModify failed, {} {} >", e, e.getStackTrace()[0].toString());
        }
        return false;
    }
    public static boolean compareAndModify(Object dest, Object orig,List<String> modifyProperty){
        try {
            return BeanUtilBean.getInstance().compareAndModify(dest,orig,modifyProperty);
        } catch (IllegalAccessException e) {
            log.error("<BeanUtil.compareAndModify failed, {} {} >", e, e.getStackTrace()[0].toString());
        } catch (InvocationTargetException e) {
            log.error("<BeanUtil.compareAndModify failed, {} {} >", e, e.getStackTrace()[0].toString());
        }
        return false;
    }
}
