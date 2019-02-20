package com.tools.constants;

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

    private final String name;

    public Byte code() {
        return this.code;
    }

    /**
     * Return the reason phrase of this status code.
     */
    public String getDetail() {
        return this.name;
    }

    UserType(Byte code, String name) {
        this.code = code;
        this.name = name;
    }

    public static UserType get(Byte code) {
        for (UserType item : UserType.values()) {
            if (item.code.equals(code)) return item;
        }
        return null;
    }

    public static String getName(Byte code) {
        for (UserType item : UserType.values()) {
            if (item.code.equals(code)) return item.name;
        }
        return null;
    }
}
