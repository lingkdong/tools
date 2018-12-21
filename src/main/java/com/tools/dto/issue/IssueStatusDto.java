package com.tools.dto.issue;

import lombok.Data;

/**
 * @Author: dongxin
 * @Date: 2018/12/21 19:43
 **/
@Data
public class IssueStatusDto {
    private  Byte code;
    private  String name;
    private  Long totalNum;

    private IssueStatusDto(Builder builder) {
        this.code = builder.code;
        this.name = builder.name;
        this.totalNum = builder.totalNum;
    }

    public static Builder newIssueStatusDto() {
        return new Builder();
    }

    public static final class Builder {
        private Byte code;
        private String name;
        private Long totalNum;

        private Builder() {
        }

        public IssueStatusDto build() {
            return new IssueStatusDto(this);
        }

        public Builder code(Byte code) {
            this.code = code;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder totalNum(Long totalNum) {
            this.totalNum = totalNum;
            return this;
        }
    }
}
