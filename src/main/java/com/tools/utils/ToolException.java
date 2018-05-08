package com.tools.utils;

/**
 * Created by lk on 2018/5/8.
 */
public class ToolException extends Exception {
    public static final ToolException MARKDOWN_TO_HTML_EXCEPTION =
            new ToolException("An error occurred while trying to convert from markdown to html");
    public static final ToolException HTML_TO_PDF_EXCEPTION =
            new ToolException("An error occurred while trying to convert from html to pdf");
    public static final ToolException STRING_ENCODE_EXCEPTION =
            new ToolException("An error occurred while string encoding");
    public static final ToolException FILE_WRITE_EXCEPTION =
            new ToolException("An error occurred while file write");

    public ToolException() {
    }

    public ToolException(String message) {
        super(message);
    }

    public ToolException(String message, Throwable cause) {
        super(message, cause);
    }

    public ToolException(Throwable cause) {
        super(cause);
    }

    public ToolException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
