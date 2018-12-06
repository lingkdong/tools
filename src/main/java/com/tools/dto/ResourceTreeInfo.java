package com.tools.dto;

import lombok.Data;

/**
 * @Author: dongxin
 * @Date: 2018/12/4 14:41
 **/
@Data
public class ResourceTreeInfo {
    private String code;
    private String name;
    private String url;
    private String target;

    public ResourceTreeInfo() {
    }

    private ResourceTreeInfo(Builder builder) {
        this.code = builder.code;
        this.name = builder.name;
        this.url = builder.url;
        this.target = builder.target;
    }

    public static Builder newResourceInfo() {
        return new Builder();
    }

    public static final class Builder {
        private String code;
        private String name;
        private String url;
        private String target;

        private Builder() {
        }

        public ResourceTreeInfo build() {
            return new ResourceTreeInfo(this);
        }

        public Builder code(String code) {
            this.code = code;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder url(String url) {
            this.url = url;
            return this;
        }

        public Builder target(String target) {
            this.target = target;
            return this;
        }
    }
}
