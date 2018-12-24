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
    UNLABELED("unlabeled", "未标记","#586069"),
    BUG("bug", "bug","#e11d21"),
    ENHANCEMENT("enhancement", "建议","#009800"),
    ;
    private final String code;

    private final String name;

    private final String bgColor;

    public String code() {
        return this.code;
    }

    /**
     * Return the reason phrase of this status code.
     */
    public String getName() {
        return this.name;
    }

    public String getBgColor() {
        return bgColor;
    }

    IssueLabel(String code, String name, String bgColor) {
        this.code = code;
        this.name = name;
        this.bgColor = bgColor;
    }

    public static IssueLabel getIssueLabel(String code) {
        for (IssueLabel item : IssueLabel.values()) {
            if (item.code.equals(code)) return item;
        }
        return null;
    }
}
