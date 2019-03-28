package com.tools.utils;

import com.sun.istack.internal.Nullable;

import static com.tools.utils.StringUtil.lenientFormat;

/**
 * @Author: dongxin
 * @Date: 2019/3/22 16:26
 **/
public final class Validate {
    private Validate() {
    }

    public static void checkArgument(boolean expression) {
        if (!expression) {
            throw new IllegalArgumentException();
        }
    }

    public static void checkArgumment(boolean expression, @Nullable Object errorMessage) {
        if (!expression) {
            throw new IllegalArgumentException(String.valueOf(errorMessage));
        }
    }

    public static void checkArgumment(boolean expression, @Nullable String errorMessageTemplate,
                                      @Nullable Object... errorMessageArgs) {
        if (!expression) {
            throw new IllegalArgumentException(lenientFormat(errorMessageTemplate, errorMessageArgs));
        }
    }

    public static void checkState(boolean expression) {
        if (!expression) {
            throw new IllegalStateException();
        }
    }

    public static void checkState(boolean expression, @Nullable Object errorMessage) {
        if (!expression) {
            throw new IllegalStateException(String.valueOf(errorMessage));
        }
    }

    public static void checkState(boolean expression, @Nullable String errorMessageTemplate,
                                  @Nullable Object... errorMessageArgs) {
        if (!expression) {
            throw new IllegalStateException(lenientFormat(errorMessageTemplate, errorMessageArgs));
        }
    }

    public static <T extends Object> T checkNotNull(final T reference) {
        if (reference == null) {
            throw new NullPointerException();
        }
        return reference;
    }

    /**
     *
     * @param reference
     * @param errorMessageTemplate
     * @param errorMessageArgs
     * @param <T> the Object type
     * @return
     */
    public static <T extends Object> T checkNotNull(
            final T reference, @Nullable String errorMessageTemplate, @Nullable Object... errorMessageArgs) {
        if (reference == null) {
            throw new NullPointerException(lenientFormat(errorMessageTemplate, errorMessageArgs));
        }
        return reference;
    }

    /**
     * interface CharSequence
     * All know implementing classes:
     * CharBuffer,Segment,String,StringBuffer,StringBuilder
     * https://docs.oracle.com/javase/8/docs/api/java/lang/CharSequence.html
     * @param chars
     * @param <T> the CharSequence type
     * @return
     */
    public static <T extends CharSequence> T checkNotBlank(final T chars) {
        if (chars == null) {
            throw new NullPointerException();
        }
        if (StringUtil.isBlank(chars)) {
            throw new IllegalArgumentException();
        }
        return chars;
    }

    /**
     *
     * @param chars
     * @param errorMessageTemplate
     * @param errorMessageArgs
     * @param <T> the CharSequence type
     * @return
     */
    public static <T extends CharSequence> T checkNotBlank(final T chars, @Nullable String errorMessageTemplate,
                                                           @Nullable Object... errorMessageArgs) {
        if (chars == null) {
            throw new NullPointerException(lenientFormat(errorMessageTemplate, errorMessageArgs));
        }
        if (StringUtil.isBlank(chars)) {
            throw new IllegalArgumentException(lenientFormat(errorMessageTemplate, errorMessageArgs));
        }
        return chars;
    }


}
