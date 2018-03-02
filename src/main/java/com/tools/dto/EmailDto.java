package com.tools.dto;

import java.io.File;
import java.util.List;

/**
 * Created by lk on 2018/1/13.
 */
public class EmailDto {
    private String emailTo;
    private String emailCCTo;
    private String subjet;
    private String msg;
    private List<File> files;

    private EmailDto(Builder builder) {
        this.emailTo = builder.emailTo;
        this.emailCCTo = builder.emailCCTo;
        this.subjet = builder.subjet;
        this.msg = builder.msg;
        this.files = builder.files;
    }

    public static Builder newEmailDto() {
        return new Builder();
    }

    public String getEmailTo() {
        return emailTo;
    }

    public void setEmailTo(String emailTo) {
        this.emailTo = emailTo;
    }

    public String getEmailCCTo() {
        return emailCCTo;
    }

    public void setEmailCCTo(String emailCCTo) {
        this.emailCCTo = emailCCTo;
    }

    public String getSubjet() {
        return subjet;
    }

    public void setSubjet(String subjet) {
        this.subjet = subjet;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public List<File> getFiles() {
        return files;
    }

    public void setFiles(List<File> files) {
        this.files = files;
    }


    public static final class Builder {
        private String emailTo;
        private String emailCCTo;
        private String subjet;
        private String msg;
        private List<File> files;

        private Builder() {
        }

        public EmailDto build() {
            return new EmailDto(this);
        }

        public Builder emailTo(String emailTo) {
            this.emailTo = emailTo;
            return this;
        }

        public Builder emailCCTo(String emailCCTo) {
            this.emailCCTo = emailCCTo;
            return this;
        }

        public Builder subjet(String subjet) {
            this.subjet = subjet;
            return this;
        }

        public Builder msg(String msg) {
            this.msg = msg;
            return this;
        }

        public Builder files(List<File> files) {
            this.files = files;
            return this;
        }
    }
}
