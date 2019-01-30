package com.tools.constants;

/**
 * issue status
 * Created with IntelliJ IDEA.
 * User: lkdong
 * Date: 18-6-3
 * Time: 下午11:39
 * To change this template use File | Settings | File Templates.
 */
public enum IssueCommentType {
    comment((byte) 1, "comment", "评论"),
    CLOSED((byte) 2, "closed", "关闭"),
    REOPEN((byte) 3, "reopen", "重新开启");
    private final Byte code;

    private final String name;
    private final String desc;

    public Byte code() {
        return this.code;
    }

    /**
     * Return the reason phrase of this status code.
     */
    public String getName() {
        return this.name;
    }

    public String getDesc() {
        return desc;
    }

    IssueCommentType(Byte code, String name, String desc) {
        this.code = code;
        this.name = name;
        this.desc = desc;
    }

    public static IssueCommentType get(Byte code) {
        for (IssueCommentType item : IssueCommentType.values()) {
            if (item.code.equals(code)) return item;
        }
        return null;
    }
}
