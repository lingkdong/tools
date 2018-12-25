package com.tools.constants;

/**
 * @Author: dongxin
 * @Date: 2018/12/25 10:25
 **/
public enum IssueSort {

    CREATE_DESC("createDesc", "最近创建", "createTime", "desc"),
    CREATE_ASC("createAsc", "最久创建", "createTime", "asc"),
    COMMENT_COUNT_ASC("commentCountAsc", "最少评论", "commentCount", "asc"),
    COMMENT_COUNT_DESC("commentCountDesc", "最多评论", "commentCount", "desc"),
    UPDATE_DESC("updateDesc", "最近更新", "lastUpdateTime", "desc"),
    UPDATE_ASC("updateAsc", "最久更新", "lastUpdateTime", "asc"),
    ;
    private final String code;
    private final String name;
    private final String column;
    private final String sortType;

    public String code() {
        return code;
    }

    public String getName() {
        return name;
    }

    public String getColumn() {
        return column;
    }

    public String getSortType() {
        return sortType;
    }

    IssueSort(String code, String name, String column, String sortType) {
        this.code = code;
        this.name = name;
        this.column = column;
        this.sortType = sortType;
    }

    public static IssueSort getIssueSort(String code) {
        for (IssueSort item : IssueSort.values()) {
            if (item.code.equals(code)) return item;
        }
        return null;
    }
}
