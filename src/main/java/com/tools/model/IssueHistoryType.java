package com.tools.model;

/**
 * Created with IntelliJ IDEA.
 * User: lkdong
 * Date: 18-6-3
 * Time: 下午11:39
 * To change this template use File | Settings | File Templates.
 */
public enum IssueHistoryType {
    TITLE_CHANGED((byte) 1, "title changed"),
    COMMENT_CHANGED((byte) 2, "comment changed");
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

    IssueHistoryType(Byte code, String detail) {
        this.code = code;
        this.detail = detail;
    }
}
