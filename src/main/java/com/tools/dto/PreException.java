package com.tools.dto;

/**
 * Created by DT254 on 2018/1/19.
 */
public class PreException extends RuntimeException {
    private Integer errorCode;
    private String errorMessage;
    private Object data;
    public PreException(HttpStatus status){
        this.errorCode=status.value();
        this.errorMessage=status.getReasonPhrase();
    }

    public PreException(HttpStatus status,Object data){
        this.errorCode=status.value();
        this.errorMessage=status.getReasonPhrase();
        this.data=data;
    }

    public PreException(Integer errorCode,String errorMessage){
        this.errorCode=errorCode;
        this.errorMessage=errorMessage;
    }

    public Integer getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(Integer errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
