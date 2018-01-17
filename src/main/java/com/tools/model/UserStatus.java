package com.tools.model;

/**
 * Created by DT254 on 2018/1/17.
 */
public enum  UserStatus {
    NORMAL("002","normal"),
    LOCKED("003","locked"),
    CANCEL("005","cancel");
    private final String code;

    private final String detail;

    public String code() {
        return this.code;
    }

    /**
     * Return the reason phrase of this status code.
     */
    public String getDetail() {
        return this.detail;
    }
    UserStatus(String code,String detail) {
        this.code=code;
        this.detail=detail;
    }
}
