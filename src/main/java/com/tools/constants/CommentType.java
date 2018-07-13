package com.tools.constants;

/**
 * comment type
 * comment_type:comment can change to deleted
 * Created with IntelliJ IDEA.
 * User: lkdong
 * Date: 18-6-3
 * Time: 下午11:39
 * To change this template use File | Settings | File Templates.
 */
public enum CommentType {
    //show
    COMMENT((byte) 1, "comment"),//comment can change to deleted
    CLOSED((byte) 2, "closed"),// change issue status to closed
    REOPEN((byte) 3, "reopen"),// change issue status to open
    //not show
    DELETED((byte) 4, "deleted");//not show on page
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

    CommentType(Byte code, String detail) {
        this.code = code;
        this.detail = detail;
    }
}
