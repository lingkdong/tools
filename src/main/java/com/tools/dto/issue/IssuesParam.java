package com.tools.dto.issue;

/**
 * issues query param
 * @Author: dongxin
 * @Date: 2018/7/13 14:50
 **/
public class IssuesParam {
    /**
     * issue status
     * 1: open
     * 2: close
     */
   private Byte issueStatus;

    public IssuesParam() {
    }

    private IssuesParam(Builder builder) {
        this.issueStatus = builder.issueStatus;
    }

    public static Builder newIssuesParam() {
        return new Builder();
    }

    public Byte getIssueStatus() {
        return issueStatus;
    }

    public void setIssueStatus(Byte issueStatus) {
        this.issueStatus = issueStatus;
    }

    public static final class Builder {
        private Byte issueStatus;

        private Builder() {
        }

        public IssuesParam build() {
            return new IssuesParam(this);
        }

        public Builder issueStatus(Byte issueStatus) {
            this.issueStatus = issueStatus;
            return this;
        }
    }

}
