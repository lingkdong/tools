package com.tools.constants;

/**
 * issue status
 * Created with IntelliJ IDEA.
 * User: lkdong
 * Date: 18-6-3
 * Time: 下午11:39
 * To change this template use File | Settings | File Templates.
 */
public enum IssueStatus {
    OPEN((byte) 1, "open"),
    CLOSED((byte) 2, "closed");
    private final Byte code;

    private final String name;

    public Byte code() {
        return this.code;
    }

    /**
     * Return the reason phrase of this status code.
     */
    public String getName() {
        return this.name;
    }

    IssueStatus(Byte code, String name) {
        this.code = code;
        this.name = name;
    }

    public static IssueStatus getIssueStatus(Byte code) {
        for (IssueStatus item : IssueStatus.values()) {
            if (item.code.equals(code)) return item;
        }
        return null;
    }
}
