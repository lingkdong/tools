package com.tools.constants;

/**
 * @Author: dongxin
 * @Date: 2019/1/28 14:33
 **/
public enum FileChannelEnum {
    USERS("users"),
    CONVERT("convert"),
    ISSUES("issues");
    private final String value;

    public String value() {
        return this.value;
    }

    FileChannelEnum(String value) {
        this.value = value;
    }

}
