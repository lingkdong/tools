package com.tools.dto;

/**
 * Created by DT254 on 2018/1/16.
 */
public class ErrorInfo {
    private String property;
    private Integer status;
    private String message;

    private ErrorInfo(Builder builder) {
        this.property = builder.property;
        this.status = builder.status;
        this.message = builder.message;
    }

    public static Builder newErrorInfo() {
        return new Builder();
    }

    public String getProperty() {
        return property;
    }

    public void setProperty(String property) {
        this.property = property;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }


    public static final class Builder {
        private String property;
        private Integer status;
        private String message;

        private Builder() {
        }

        public ErrorInfo build() {
            return new ErrorInfo(this);
        }

        public Builder property(String property) {
            this.property = property;
            return this;
        }
        public Builder HttpStatus(HttpStatus httpStatus) {
            this.status = httpStatus.value();
            this.message = httpStatus.getReasonPhrase();
            return this;
        }

        public Builder status(Integer status) {
            this.status = status;
            return this;
        }

        public Builder message(String message) {
            this.message = message;
            return this;
        }
    }
}
