package com.tools.dto;

import lombok.Builder;

/**
 * Created by lk on 2017/11/14.
 */
public class ResourceDto {
    private Long id;
    private String name;
    private String code;
    private Long categoryId;
    private String url;

    public ResourceDto() {
    }

    private ResourceDto(Builder builder) {
        this.id = builder.id;
        this.name = builder.name;
        this.code = builder.code;
        this.categoryId = builder.categoryId;
        this.url = builder.url;
    }

    public static Builder newResourceDto() {
        return new Builder();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public static final class Builder {
        private Long id;
        private String name;
        private String code;
        private Long categoryId;
        private String url;

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
    }
}
