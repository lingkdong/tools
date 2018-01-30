package com.tools.utils;

import org.apache.commons.beanutils.BeanUtilsBean;
import org.apache.commons.beanutils.ContextClassLoaderLocal;
import org.apache.commons.beanutils.DynaBean;
import org.apache.commons.beanutils.DynaProperty;
import org.apache.commons.beanutils.converters.*;
import org.apache.commons.collections.CollectionUtils;

import java.beans.PropertyDescriptor;
import java.lang.reflect.InvocationTargetException;
import java.util.*;

/**
 * Created by DT254 on 2018/1/29.
 */
public class BeanUtilBean extends BeanUtilsBean {
    private static final ContextClassLoaderLocal
            BEANS_BY_CLASSLOADER = new ContextClassLoaderLocal() {
        // Creates the default instance used when the context classloader is unavailable
        protected Object initialValue() {
            return new BeanUtilBean();
        }
    };
    public static BeanUtilBean getInstance() {
        BeanUtilBean beanUtilBean=(BeanUtilBean) BEANS_BY_CLASSLOADER.get();
//        java.lang.BigDecimal (no default value)
//        java.lang.BigInteger (no default value)
//        boolean and java.lang.Boolean (default to false)
//        byte and java.lang.Byte (default to zero)
//        char and java.lang.Character (default to a space)
//        java.lang.Class (no default value)
//        double and java.lang.Double (default to zero)
//        float and java.lang.Float (default to zero)
//        int and java.lang.Integer (default to zero)
//        long and java.lang.Long (default to zero)
//        short and java.lang.Short (default to zero)
//        java.lang.String (default to null)
//        java.io.File (no default value)
//        java.net.URL (no default value)
//        java.sql.Date (no default value)
//        java.sql.Time (no default value)
//        java.sql.Timestamp (no default value)
        beanUtilBean.getConvertUtils().register(new BooleanConverter(null),Boolean.class);
        beanUtilBean.getConvertUtils().register(new ByteConverter(null),Byte.class);
        beanUtilBean.getConvertUtils().register(new CharacterConverter(null),Byte.class);
        beanUtilBean.getConvertUtils().register(new DoubleConverter(null),Double.class);
        beanUtilBean.getConvertUtils().register(new FloatConverter(null),Double.class);
        beanUtilBean.getConvertUtils().register(new IntegerConverter(null), Integer.class);
        beanUtilBean.getConvertUtils().register(new LongConverter(null), Long.class);
        beanUtilBean.getConvertUtils().register(new ShortConverter(null), Long.class);
        beanUtilBean.getConvertUtils().register(new StringConverter(null), String.class);
        beanUtilBean.getConvertUtils().register(new DateConverter(null), Date.class);
        beanUtilBean.getConvertUtils().register(new CalendarConverter(null),Calendar.class);
        return beanUtilBean ;
    }

    public boolean compareAndModify(Object dest, Object orig, List<String> modifyProperty)
            throws IllegalAccessException, InvocationTargetException {
        if (CollectionUtils.isEmpty(modifyProperty)) {
            return compareAndModify(dest, orig);
        }
        // Validate existence of the specified beans
        if (dest == null) {
            throw new IllegalArgumentException
                    ("No destination bean specified");
        }
        if (orig == null) {
            throw new IllegalArgumentException("No origin bean specified");
        }
        int flag = 0;
        // Copy the properties, converting as necessary
        if (orig instanceof DynaBean) {
            DynaProperty[] origDescriptors =
                    ((DynaBean) orig).getDynaClass().getDynaProperties();
            for (int i = 0; i < origDescriptors.length; i++) {
                String name = origDescriptors[i].getName();
                if (!modifyProperty.contains(name)) {
                    continue;
                }
                // Need to check isReadable() for WrapDynaBean
                // (see Jira issue# BEANUTILS-61)
                if (getPropertyUtils().isReadable(orig, name) &&
                        getPropertyUtils().isWriteable(dest, name)) {
                    Object value = ((DynaBean) orig).get(name);
                    Object dest_value = ((DynaBean) dest).get(name);
                    if (value != null && !value.equals(dest_value)) {
                        copyProperty(dest, name, value);
                        flag++;
                    }
                }
            }
        } else if (orig instanceof Map) {
            Iterator entries = ((Map) orig).entrySet().iterator();
            while (entries.hasNext()) {
                Map.Entry entry = (Map.Entry) entries.next();
                String name = (String) entry.getKey();
                if (!modifyProperty.contains(name)) {
                    continue;
                }
                Map _dest = ((Map) dest);
                if (getPropertyUtils().isWriteable(dest, name)) {
                    Object value = entry.getValue();
                    Object dest_value = _dest.get(entry.getKey());
                    if (value != null && !value.equals(dest_value)) {
                        copyProperty(dest, name, value);
                        flag++;
                    }
                }
            }
        } else /* if (orig is a standard JavaBean) */ {
            PropertyDescriptor[] origDescriptors =
                    getPropertyUtils().getPropertyDescriptors(orig);
            for (int i = 0; i < origDescriptors.length; i++) {
                String name = origDescriptors[i].getName();
                if ("class".equals(name)) {
                    continue; // No point in trying to set an object's class
                }
                if (!modifyProperty.contains(name)) {
                    continue;
                }
                if (getPropertyUtils().isReadable(orig, name) &&
                        getPropertyUtils().isWriteable(dest, name)) {
                    try {
                        Object value =
                                getPropertyUtils().getSimpleProperty(orig, name);
                        Object dest_value =
                                getPropertyUtils().getSimpleProperty(dest, name);
                        if (value != null && !value.equals(dest_value)) {
                            copyProperty(dest, name, value);
                            flag++;
                        }
                    } catch (NoSuchMethodException e) {
                        // Should not happen
                    }
                }
            }
        }

        return flag > 0;
    }

    public boolean compareAndModify(Object dest, Object orig)
            throws IllegalAccessException, InvocationTargetException {
        // Validate existence of the specified beans
        if (dest == null) {
            throw new IllegalArgumentException
                    ("No destination bean specified");
        }
        if (orig == null) {
            throw new IllegalArgumentException("No origin bean specified");
        }
        int flag = 0;
        // Copy the properties, converting as necessary
        if (orig instanceof DynaBean) {
            DynaProperty[] origDescriptors =
                    ((DynaBean) orig).getDynaClass().getDynaProperties();
            for (int i = 0; i < origDescriptors.length; i++) {
                String name = origDescriptors[i].getName();
                // Need to check isReadable() for WrapDynaBean
                // (see Jira issue# BEANUTILS-61)
                if (getPropertyUtils().isReadable(orig, name) &&
                        getPropertyUtils().isWriteable(dest, name)) {
                    Object value = ((DynaBean) orig).get(name);
                    Object dest_value = ((DynaBean) dest).get(name);
                    if (value != null && !value.equals(dest_value)) {
                        copyProperty(dest, name, value);
                        flag++;
                    }
                }
            }
        } else if (orig instanceof Map) {
            Iterator entries = ((Map) orig).entrySet().iterator();
            while (entries.hasNext()) {
                Map.Entry entry = (Map.Entry) entries.next();
                String name = (String) entry.getKey();
                Map _dest = ((Map) dest);
                if (getPropertyUtils().isWriteable(dest, name)) {
                    Object value = entry.getValue();
                    Object dest_value = _dest.get(entry.getKey());
                    if (value != null && !value.equals(dest_value)) {
                        copyProperty(dest, name, value);
                        flag++;
                    }
                }
            }
        } else /* if (orig is a standard JavaBean) */ {
            PropertyDescriptor[] origDescriptors =
                    getPropertyUtils().getPropertyDescriptors(orig);
            for (int i = 0; i < origDescriptors.length; i++) {
                String name = origDescriptors[i].getName();
                if ("class".equals(name)) {
                    continue; // No point in trying to set an object's class
                }
                if (getPropertyUtils().isReadable(orig, name) &&
                        getPropertyUtils().isWriteable(dest, name)) {
                    try {
                        Object value =
                                getPropertyUtils().getSimpleProperty(orig, name);
                        Object dest_value =
                                getPropertyUtils().getSimpleProperty(dest, name);
                        if (value != null && !value.equals(dest_value)) {
                            copyProperty(dest, name, value);
                            flag++;
                        }
                    } catch (NoSuchMethodException e) {
                        // Should not happen
                    }
                }
            }
        }

        return flag > 0;
    }
}
