package com.tools.utils;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import org.apache.commons.lang3.StringUtils;

/**
 * Created by DT254 on 2017/12/13.
 */
public class JsonUtils {
    public static String format(String txt) {
        if (StringUtils.isBlank(txt)) return txt;
        return new GsonBuilder().setPrettyPrinting().create().toJson(parseToJson(txt));
    }

    public static String compress(String txt) {
        if (StringUtils.isBlank(txt)) return txt;
        return new Gson().toJson(parseToJson(txt));
    }

    public static JsonElement parseToJson(String txt) {
        if (StringUtils.isBlank(txt)) return null;
        JsonParser jp = new JsonParser();
        JsonElement je = jp.parse(txt);
        return je;
    }
}
