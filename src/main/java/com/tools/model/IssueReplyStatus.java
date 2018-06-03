package com.tools.model;

/**
 * Created with IntelliJ IDEA.
 * User: lkdong
 * Date: 18-6-3
 * Time: 下午11:39
 * To change this template use File | Settings | File Templates.
 */
public enum IssueReplyStatus {
    NORMAL((byte) 1, "normal"),
    DELETED((byte) 2, "deleted");
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

    IssueReplyStatus(Byte code, String detail) {
        this.code = code;
        this.detail = detail;
    }
}
