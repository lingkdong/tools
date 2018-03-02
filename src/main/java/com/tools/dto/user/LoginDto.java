package com.tools.dto.user;

import lombok.Data;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by lk on 2018/1/19.
 */
@Data
public class LoginDto {
    private String username;
    private String password;
    private boolean rememberMe;
    private HttpServletRequest request;

    public LoginDto() {
    }

    private LoginDto(Builder builder) {
        this.username = builder.username;
        this.password = builder.password;
        this.rememberMe = builder.rememberMe;
        this.request = builder.request;
    }

    public static Builder newLoginDto() {
        return new Builder();
    }

    public static final class Builder {
        private String username;
        private String password;
        private boolean rememberMe;
        private HttpServletRequest request;

        private Builder() {
        }

        public LoginDto build() {
            return new LoginDto(this);
        }

        public Builder username(String username) {
            this.username = username;
            return this;
        }

        public Builder password(String password) {
            this.password = password;
            return this;
        }

        public Builder rememberMe(boolean rememberMe) {
            this.rememberMe = rememberMe;
            return this;
        }

        public Builder request(HttpServletRequest request) {
            this.request = request;
            return this;
        }
    }
}
