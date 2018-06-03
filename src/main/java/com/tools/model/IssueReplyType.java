package com.tools.model;

/**
 * Created with IntelliJ IDEA.
 * User: lkdong
 * Date: 18-6-3
 * Time: 下午11:39
 * To change this template use File | Settings | File Templates.
 */
public enum IssueReplyType {
    COMMENT((byte) 1, "comment"),
    CLOSED((byte) 2, "closed"),
    REOPEN((byte) 3, "reopen");
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

    IssueReplyType(Byte code, String detail) {
        this.code = code;
        this.detail = detail;
    }
}
