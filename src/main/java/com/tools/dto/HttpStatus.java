package com.tools.dto;

/**
 * Created by DT254 on 2017/11/8.
 */
public enum HttpStatus {

    OK(2000, "Success"),

    CLIENT_ERROR(4000, "Client Error"),

    /**
     * unauthorized
     **/
    UNAUTHORIZED(4001, "unauthorized"),

    /**
     * user not exist
     **/
    USER_NOT_EXIST(4002, "user not exist"),
    USER_IS_LOCKED(4020, "user is locked"),
    USER_IS_CANCEL(4021, "user is cancel"),

    /**
     * incorrect password
     **/
    INCORRECT_PASSWORD(4003, "incorrect password"),

    /**
     * user already exit
     **/
    USER_ALREADY_EXIST(4004, "user already exit"),
    /**
     * param is incorrect
     **/
    PARAM_INCORRECT(4007, "param is incorrect"),
    IS_BLANK(4008, "is blank"),
    INVALID_FORMAT(4009, "invalid format"),
    ALREADY_EXIT(4010, "already exit"),
    IS_EXPIRED(4011, "is expired"),
    IS_DISABLED(4012, "is disabled"),
    LOGIN_EXPIRED(4013, "login expired"),
    NOT_EXIT(4014, "not exit"),
    FILE_EMPTY(4015, "file empty"),
    FILE_UPLOAD_ERROR(4016, "file upload error"),
    FILE_CONVERT_ERROR(4017, "file convert error"),

    // 5xxx  Server Error
    SERVER_ERROR(5000, "Server Error"),

    INTERNAL_SERVER_ERROR(5003, "Service unavailable");


    private final int value;

    private final String reasonPhrase;


    HttpStatus(int value, String reasonPhrase) {
        this.value = value;
        this.reasonPhrase = reasonPhrase;
    }


    /**
     * Return the integer value of this status code.
     */
    public int value() {
        return this.value;
    }

    /**
     * Return the reason phrase of this status code.
     */
    public String getReasonPhrase() {
        return this.reasonPhrase;
    }

    /**
     * Whether this status code is in the HTTP series
     * {@link org.springframework.http.HttpStatus.Series#INFORMATIONAL}.
     * This is a shortcut for checking the value of {@link #series()}.
     */
    public boolean is1xxInformational() {
        return Series.INFORMATIONAL.equals(series());
    }

    /**
     * Whether this status code is in the HTTP series
     * {@link org.springframework.http.HttpStatus.Series#SUCCESSFUL}.
     * This is a shortcut for checking the value of {@link #series()}.
     */
    public boolean is2xxSuccessful() {
        return Series.SUCCESSFUL.equals(series());
    }

    /**
     * Whether this status code is in the HTTP series
     * {@link org.springframework.http.HttpStatus.Series#REDIRECTION}.
     * This is a shortcut for checking the value of {@link #series()}.
     */
    public boolean is3xxRedirection() {
        return Series.REDIRECTION.equals(series());
    }


    /**
     * Whether this status code is in the HTTP series
     * {@link org.springframework.http.HttpStatus.Series#CLIENT_ERROR}.
     * This is a shortcut for checking the value of {@link #series()}.
     */
    public boolean is4xxClientError() {
        return Series.CLIENT_ERROR.equals(series());
    }

    /**
     * Whether this status code is in the HTTP series
     * {@link org.springframework.http.HttpStatus.Series#SERVER_ERROR}.
     * This is a shortcut for checking the value of {@link #series()}.
     */
    public boolean is5xxServerError() {
        return Series.SERVER_ERROR.equals(series());
    }

    /**
     * Returns the HTTP status series of this status code.
     *
     * @see HttpStatus.Series
     */
    public Series series() {
        return Series.valueOf(this);
    }

    /**
     * Return a string representation of this status code.
     */
    @Override
    public String toString() {
        return Integer.toString(this.value);
    }


    /**
     * Return the enum constant of this type with the specified numeric value.
     *
     * @param statusCode the numeric value of the enum to be returned
     * @return the enum constant with the specified numeric value
     * @throws IllegalArgumentException if this enum has no constant for the specified numeric value
     */
    public static HttpStatus valueOf(int statusCode) {
        for (HttpStatus status : values()) {
            if (status.value == statusCode) {
                return status;
            }
        }
        throw new IllegalArgumentException("No matching constant for [" + statusCode + "]");
    }


    /**
     * Enumeration of HTTP status series.
     * <p>Retrievable via {@link HttpStatus#series()}.
     */
    public enum Series {

        INFORMATIONAL(1),
        SUCCESSFUL(2),
        REDIRECTION(3),
        CLIENT_ERROR(4),
        SERVER_ERROR(5);

        private final int value;

        Series(int value) {
            this.value = value;
        }

        /**
         * Return the integer value of this status series. Ranges from 1 to 5.
         */
        public int value() {
            return this.value;
        }

        public static Series valueOf(int status) {
            int seriesCode = status / 100;
            for (Series series : values()) {
                if (series.value == seriesCode) {
                    return series;
                }
            }
            throw new IllegalArgumentException("No matching constant for [" + status + "]");
        }

        public static Series valueOf(HttpStatus status) {
            return valueOf(status.value);
        }
    }
}
