package com.tools.dto;

/**
 * Created by lk on 2017/11/8.
 */
public class BaseResponseDTO {
    private Integer status;
    private String message;
    private Object data;

    public BaseResponseDTO(Integer status, String message) {
        this.status = status;
        this.message = message;
    }

    public BaseResponseDTO(HttpStatus httpStatus) {
        this.status = httpStatus.value();
        this.message = httpStatus.getReasonPhrase();
    }

    public BaseResponseDTO(Integer status, String message, Object data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    public BaseResponseDTO(HttpStatus httpStatus, Object data) {
        this.status = httpStatus.value();
        this.message = httpStatus.getReasonPhrase();
        this.data = data;
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

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

}
