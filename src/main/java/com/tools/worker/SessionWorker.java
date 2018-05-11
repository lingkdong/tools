package com.tools.worker;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by lk on 2018/1/10.
 */
public class SessionWorker {
    public final static int HOUR_HALF=60*30;
    public final static int TEN_MINUTE=60*10;
    public final static int HOUR_1=60*60;
    public static HttpSession setInterval(final HttpSession session, int interval) {
        session.setMaxInactiveInterval(interval);
        return session;
    }
}
