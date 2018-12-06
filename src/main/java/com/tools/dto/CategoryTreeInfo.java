package com.tools.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author: dongxin
 * @Date: 2018/12/3 18:26
 **/
@Data
public class CategoryTreeInfo {
    private Long categoryId;
    private String categoryName;
    private String categoryCode;
    private List<ResourceTreeInfo> children;

    public CategoryTreeInfo() {
    }

    private CategoryTreeInfo(Builder builder) {
        this.categoryId = builder.categoryId;
        this.categoryName = builder.categoryName;
        this.categoryCode = builder.categoryCode;
        this.children = builder.children;
    }

    public static Builder newCategoryTreeDto() {
        return new Builder();
    }

    public static final class Builder {
        private Long categoryId;
        private String categoryName;
        private String categoryCode;
        private List children;

        private Builder() {
        }

        public CategoryTreeInfo build() {
            return new CategoryTreeInfo(this);
        }

        public Builder categoryId(Long categoryId) {
            this.categoryId = categoryId;
            return this;
        }

        public Builder categoryName(String categoryName) {
            this.categoryName = categoryName;
            return this;
        }

        public Builder categoryCode(String categoryCode) {
            this.categoryCode = categoryCode;
            return this;
        }

        public Builder children(List children) {
            this.children = children;
            return this;
        }
    }

}
