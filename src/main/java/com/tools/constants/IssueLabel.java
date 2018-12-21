package com.tools.constants;

/**
 * issue status
 * Created with IntelliJ IDEA.
 * User: lkdong
 * Date: 18-6-3
 * Time: 下午11:39
 * To change this template use File | Settings | File Templates.
 */
public enum IssueLabel {
    UNLABELED("unlabeled", "未标记"),
    BUG("bug", "bug"),
    ENHANCEMENT("enhancement", "建议"),
    ;
    private final String code;

    private final String name;

    public String code() {
        return this.code;
    }

    /**
     * Return the reason phrase of this status code.
     */
    public String getName() {
        return this.name;
    }

    IssueLabel(String code, String name) {
        this.code = code;
        this.name = name;
    }
}
