package com.tools.utils;

import org.apache.commons.lang3.RandomUtils;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * Created by DT254 on 2017/11/8.
 */
public class StringUtil {
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
}
