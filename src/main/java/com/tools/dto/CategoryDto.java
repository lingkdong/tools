package com.tools.dto;

import lombok.Data;

import java.util.List;

/**
 * Created by lk on 2017/11/14.
 */
@Data
public class CategoryDto {
    private Long id;
    private String name;
    private String code;
    private List<ResourceDto> resourceDtos;
    private String description;

    public CategoryDto() {
    }

    private CategoryDto(Builder builder) {
        this.id = builder.id;
        this.name = builder.name;
        this.code = builder.code;
        this.resourceDtos = builder.resourceDtos;
        this.description = builder.description;
    }

    public static Builder newCategoryDto() {
        return new Builder();
    }

    public static final class Builder {
        private Long id;
        private String name;
        private String code;
        private List<ResourceDto> resourceDtos;
        private String description;

        private Builder() {
        }

        public CategoryDto build() {
            return new CategoryDto(this);
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

        public Builder resourceDtos(List<ResourceDto> resourceDtos) {
            this.resourceDtos = resourceDtos;
            return this;
        }

        public Builder description(String description) {
            this.description = description;
            return this;
        }
    }
}
