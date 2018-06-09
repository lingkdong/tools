package com.tools.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * Created by lk on 2018/1/17.
 */
@Component
public class PrefoxEmailTemp {
    @Value("${prefox.official.website}")
    private String prefox_offical_website;
    public static final String OFFICIAL_WEBSITE_REG="prefox.official.website";
    public static final String CHANGE_PASS_URL= PrefoxEmailTemp.OFFICIAL_WEBSITE_REG +
            "/anon/user/password-change/";
    public static final String RESET_PASS_URL= PrefoxEmailTemp.OFFICIAL_WEBSITE_REG +
            "/anon/user/password-reset";

    private static String html = "<div name=\"prefox_email\"><style type=\"text/css\">div{font-family:\"lucida Grande\",Verdana,\"Microsoft YaHei\";font-size:12px;line-height:170%}\n" +
            ".align-right{text-align:right}.px-3{padding-right:16px !important;padding-left:16px !important}\n" +
            ".container-lg{max-width:768px;margin-right:auto;margin-left:auto}*{box-sizing:border-box}\n" +
            ".flex-justify-between{-webkit-box-pack:justify !important;justify-content:space-between !important}\n" +
            ".d-flex{display:-webkit-box !important;display:flex !important}.f6{font-size:12px !important}\n" +
            ".py-6{padding-top:40px !important;padding-bottom:40px !important}.mt-3{margin-top:16px !important}\n" +
            ".position-relative{position:relative !important}.text-gray{color:#586069 !important}\n" +
            ".border-gray-light{border-color:#eaecef !important}.border-top{border-top:1px #e1e4e8 solid !important}\n" +
            ".border-bottom{border-bottom:1px #e1e4e8 solid !important}.list-style-none{list-style:none !important;list-style-type:none !important}\n" +
            ".flex-wrap{flex-wrap:wrap !important}ul,ol{padding-left:0;margin-top:0;margin-bottom:0}\n" +
            "ul,menu,dir{display:block;list-style-type:disc;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0;-webkit-margin-end:0;-webkit-padding-start:40px}\n" +
            ".mr-3{margin-right:16px !important}.mb-4{margin-bottom:40px !important}a{background-color:transparent;" +
            "-webkit-text-decoration-skip:objects;color:#0366d6;text-decoration:none}\n" +
            ".top-logo svg{width:35px;height:35px}.foot-logo svg{width:24px;height:24px}.fr{float:right}\n" +
            ".fl{float:left}.summary{font-size:25px;font-weight:300;font-family:'Helvetica Neue',Helvetica,Arial," +
            "sans-serif;}</style><div class=\"container-lg px-3 border-bottom\"><div " +
            "aria-label=\"Homepage\" class=\"top-logo\" title=\"Prefox\"><svg version=\"1.0\" width=\"35px\" " +
            "height=\"35px\" viewBox=\"0 0 35.000000 35.000000\" preserveAspectRatio=\"xMidYMid meet\"><g " +
            "transform=\"translate(0.000000,35.000000) scale(0.100000,-0.100000)\" fill=\"rgb(51, 51, 51)\" " +
            "stroke=\"none\"><path d=\"M76 248 c-20 -20 -36 -45 -36 -55 0 -10 -5 -24 -11 -30 -13 -13 -5 -43 11 -43 6 " +
            "0 9 4 5 10 -6 10 40 90 53 90 14 0 31 -22 26 -34 -3 -9 14 -13 57 -14 47 -1 59 2 51 10 -9 9 -8 16 5 30 24 26 39 22 53 -14 25 -68 31 -80 36 -76 2 3 0 17 -6 32 -5 15 -10 40 -10 56 0 15 -8 38 -18 50 -16 19 -22 21 -40 11 -12 -6 -29 -25 -37 -41 -19 -37 -60 -42 -71 -7 -4 12 -13 31 -20 41 -12 18 -15 17 -48 -16z\"/></g></svg><span class=\"fr summary\">prefox.email.summary</span></div></div><div name=\"content\" class=\"container-lg px-3 mt-3 mb-4\"><p>prefox.email.call</p><p>profox.email.content</p><p>此致，<br>Prefox</p></div><div class=\"footer container-lg px-3\"><div class=\"position-relative d-flex flex-justify-between py-6 mt-3 f6 text-gray border-top border-gray-light \"><ul class=\"list-style-none d-flex flex-wrap \"><li class=\"mr-3\">© 2017 <span title=\"0.24018s from unicorn-1374631441-ms16t\">Prefox</span>, Inc.</li><li class=\"mr-3\"><a href=\"#\">Terms</a></li><li><a href=\"#\">Help</a></li></ul><a class=\"foot-logo\" aria-label=\"Homepage\" class=\"footer-octicon\" title=\"Prefox\" href=\"prefox.official.website/anon/index\"><svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24.000000 24.000000\" preserveAspectRatio=\"xMidYMid meet\"><g transform=\"translate(0.000000,24.000000) scale(0.100000,-0.100000)\" fill=\"rgb(51, 51, 51)\" stroke=\"none\"><path d=\"M62 183 c-16 -6 -53 -83 -46 -95 3 -5 14 6 24 24 16 31 48 47 43 22 -1 -7 15 -14 38 -16 28 -2 38 0 35 8 -6 15 20 38 33 30 5 -4 12 -20 16 -36 4 -16 11 -32 16 -35 5 -4 7 0 4 7 -2 7 -9 32 -15 56 -12 48 -32 54 -56 17 -15 -23 -54 -35 -54 -17 0 16 -25 40 -38 35z\"/></g></svg></a><ul class=\"list-style-none d-flex flex-wrap \"><li class=\"mr-3\"><a href=\"#\">Contact Prefox</a></li><li class=\"mr-3\"><a href=\"#\">Blog</a></li><li><a href=\"#\">About</a></li></ul></div></div></div>";

    public String buildHtmlMsg(String call,String summary,String msg) {
        return html.replace("profox.email.content",msg)
                .replace("prefox.email.call",call)
                .replace("prefox.email.summary",summary)
                .replaceAll(OFFICIAL_WEBSITE_REG, prefox_offical_website)
                ;
    }
}
