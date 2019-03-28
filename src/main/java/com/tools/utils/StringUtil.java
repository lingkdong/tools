package com.tools.utils;

import com.sun.istack.internal.Nullable;
import org.apache.commons.lang3.RandomUtils;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import java.util.Arrays;

/**
 * Created by lk on 2017/11/8.
 */
public final class StringUtil {
    private final static char[] codes = new char[]{
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
            'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y', 'z'
};
    private final static char[] number_codes = new char[]{
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    };
    private final static char[] letter_codes = new char[]{
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
            'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z'
    };
    private final static char[] special_codes = new char[]{
            '~','!','@','#','$','%','^','&','*'
    };

    public static String getValidCode(int size) {
       return getRandom(size,codes);
    }

    public static String toString(Object obj) {
        return ToStringBuilder.reflectionToString(obj, ToStringStyle.SHORT_PREFIX_STYLE);
    }

    public static String getPassword(int size){
        if(size<8) size=8;
        // letter+special+number
        int letterLen=RandomUtils.nextInt(1,size-2);
        int specialLen=RandomUtils.nextInt(1,size-letterLen-1);
        int numberLen=size-letterLen-specialLen;
        StringBuilder builder = new StringBuilder();
        builder.append(getRandom(letterLen,letter_codes)).append(getRandom(specialLen,special_codes)).append
                (getRandom(numberLen,number_codes));
        return builder.toString();
    }

    public static String getRandom(int size,char[] chars){
        StringBuilder builder = new StringBuilder();
        for(int i=0;i<size;i++){
            builder.append(chars[RandomUtils.nextInt(0,chars.length)]);
        }
        return builder.toString();
    }

    public static String lenientFormat(
            @Nullable String template, @Nullable Object ... args) {
        template = String.valueOf(template); // null -> "null"

        if (args == null) {
            args = new Object[] {"(Object[])null"};
        } else {
            for (int i = 0; i < args.length; i++) {
                args[i] = lenientToString(args[i]);
            }
        }

        // start substituting the arguments into the '%s' placeholders
        StringBuilder builder = new StringBuilder(template.length() + 16 * args.length);
        int templateStart = 0;
        int i = 0;
        while (i < args.length) {
            int placeholderStart = template.indexOf("%s", templateStart);
            if (placeholderStart == -1) {
                break;
            }
            builder.append(template, templateStart, placeholderStart);
            builder.append(args[i++]);
            templateStart = placeholderStart + 2;
        }
        builder.append(template, templateStart, template.length());
        if(i==0){
            builder.append(" ").append(Arrays.toString(args));
        }else {
            // if we run out of placeholders, append the extra args in square braces
            if (i < args.length) {
                builder.append(" [");
                builder.append(args[i++]);
                while (i < args.length) {
                    builder.append(", ");
                    builder.append(args[i++]);
                }
                builder.append(']');
            }
        }
        return builder.toString();
    }

    private static String lenientToString(@Nullable Object o) {
        try {
            return String.valueOf(o);
        } catch (Exception e) {
            // Default toString() behavior - see Object.toString()
            String objectToString =
                    o.getClass().getName() + '@' + Integer.toHexString(System.identityHashCode(o));
            // Logger is created inline with fixed name to avoid forcing Proguard to create another class.
            return "<" + objectToString + " threw " + e.getClass().getName() + ">";
        }
    }

    /**
     * interface CharSequence
     * All know implementing classes:
     * String,StringBuffer,StringBuilder,Segment,CharBuffer
     * https://docs.oracle.com/javase/8/docs/api/java/lang/CharSequence.html
     * @param cs
     * @return
     */
    public static boolean isBlank(final CharSequence cs) {
        int strLen;
        if (cs == null || (strLen = cs.length()) == 0) {
            return true;
        }
        for (int i = 0; i < strLen; i++) {
            if (Character.isWhitespace(cs.charAt(i)) == false) {
                return false;
            }
        }
        return true;
    }


}
