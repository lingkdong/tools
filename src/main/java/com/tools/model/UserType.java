package com.tools.model;

/**
 * Created with IntelliJ IDEA.
 * User: lkdong
 * Date: 18-6-3
 * Time: 下午7:17
 * To change this template use File | Settings | File Templates.
 */
public enum UserType {
    ADMIN((byte) 1, "admin"),
    NORMAL((byte) 2, "normal");
    private final Byte code;

    private final String detail;

    public Byte code() {
        return this.code;
    }

    /**
     * Return the reason phrase of this status code.
     */
    public String getDetail() {
        return this.detail;
    }

    UserType(Byte code, String detail) {
        this.code = code;
        this.detail = detail;
    }
}
