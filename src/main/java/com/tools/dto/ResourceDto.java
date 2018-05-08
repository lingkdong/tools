package com.tools.dto;

import lombok.Data;

/**
 * Created by lk on 2017/11/14.
 */
@Data
public class ResourceDto {
    private Long id;
    private String name;
    private String code;
    private Long categoryId;
    private String url;
    private String target;

    public ResourceDto() {
    }

    private ResourceDto(Builder builder) {
        this.id = builder.id;
        this.name = builder.name;
        this.code = builder.code;
        this.categoryId = builder.categoryId;
        this.url = builder.url;
        this.target = builder.target;
    }

    public static Builder newResourceDto() {
        return new Builder();
    }

    public static final class Builder {
        private Long id;
        private String name;
        private String code;
        private Long categoryId;
        private String url;
        private String target;

        private Builder() {
        }

        public ResourceDto build() {
            return new ResourceDto(this);
        }

        public Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder code(String code) {
            this.code = code;
            return this;
        }

        public Builder categoryId(Long categoryId) {
            this.categoryId = categoryId;
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
