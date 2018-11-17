package com.tools.dto;

import lombok.Data;

/**
 * @Author: dongxin
 * @Date: 2018/11/14 15:53
 **/
@Data
public class SiteNavDto {
    private Long id;
    private String name;
    private String url;
    private String title;
    private String content;
    private String icon;
    private String resourceCode;
    private Integer sortNum;

    public SiteNavDto() {
    }

    private SiteNavDto(Builder builder) {
        this.id = builder.id;
        this.name = builder.name;
        this.url = builder.url;
        this.title = builder.title;
        this.icon = builder.icon;
        this.resourceCode = builder.resourceCode;
        this.sortNum = builder.sortNum;
        this.content = builder.content;
    }

    public static Builder newSiteNavDto() {
        return new Builder();
    }

    public static final class Builder {
        private Long id;
        private String name;
        private String url;
        private String title;
        private String icon;
        private String resourceCode;
        private Integer sortNum;
        private String content;

        private Builder() {
        }

        public SiteNavDto build() {
            return new SiteNavDto(this);
        }

        public Builder id(Long id) {
            this.id = id;
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

        public Builder title(String title) {
            this.title = title;
            return this;
        }

        public Builder icon(String icon) {
            this.icon = icon;
            return this;
        }

        public Builder resourceCode(String resourceCode) {
            this.resourceCode = resourceCode;
            return this;
        }

        public Builder sortNum(Integer sortNum) {
            this.sortNum = sortNum;
            return this;
        }

        public Builder content(String content) {
            this.content = content;
            return this;
        }
    }
}
