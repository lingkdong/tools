package com.tools.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.thymeleaf.spring4.view.ThymeleafViewResolver;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by lk on 2018/3/2.
 */
@Configuration
public class ThymeleafConfig {
    @Value("${prefox.nginx}")
    private  String nginxUrl;
    @Autowired
    private void thymeleafStatic(ThymeleafViewResolver viewResolver) {
        if(viewResolver != null) {
            Map<String, Object> vars = new HashMap<>();
            vars.put("nginxUrl", nginxUrl);
            viewResolver.setStaticVariables(vars);
        }
    }
}
