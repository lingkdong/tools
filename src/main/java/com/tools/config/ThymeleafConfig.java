package com.tools.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.thymeleaf.spring4.view.ThymeleafViewResolver;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by lk on 2018/3/2.
 */
@Configuration
public class ThymeleafConfig {
    private static final String nginxUrl="http://127.0.0.1:9090/";
    @Resource
    private void thymeleafStatic(ThymeleafViewResolver viewResolver) {
        if(viewResolver != null) {
            Map<String, Object> vars = new HashMap<>();
            vars.put("nginxUrl", nginxUrl);
            viewResolver.setStaticVariables(vars);
        }
    }
}
