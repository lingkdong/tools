package com.tools.config;

import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.apache.shiro.mgt.SecurityManager;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Created by DT254 on 2018/1/19.
 */
@Configuration
public class ShiroConfig {
	@Bean
	public ShiroFilterFactoryBean shirFilter(SecurityManager securityManager) {
		ShiroFilterFactoryBean shiroFilterFactoryBean  = new ShiroFilterFactoryBean();
		shiroFilterFactoryBean.setSecurityManager(securityManager);
		//这里有坑
		//拦截器.
		Map<String,String> filterChainDefinitionMap = new LinkedHashMap();
		//登出
		filterChainDefinitionMap.put("/tools/user/logout", "logout");

		//<!-- 过滤链定义，从上向下顺序执行，一般将 /**放在最为下边 -->:这是一个坑呢，一不小心代码就不好使了;
		//<!-- authc:所有url都必须认证通过才可以访问; anon:所有url都都可以匿名访问-->
		filterChainDefinitionMap.put("/tools/authorization/**", "authc");
		filterChainDefinitionMap.put("/**", "anon");

		shiroFilterFactoryBean.setLoginUrl("/tools/user/login");

		//no login rediect to login
		shiroFilterFactoryBean.setUnauthorizedUrl("/tools/user/login");

		shiroFilterFactoryBean.setFilterChainDefinitionMap(filterChainDefinitionMap);
		return shiroFilterFactoryBean;
	}


	@Bean
	public ShiroRealm shiroRealm(){
		ShiroRealm shiroRealm=new ShiroRealm();
		return shiroRealm;
	}


	@Bean
	public SecurityManager  securityManager(){
		DefaultWebSecurityManager manager =  new DefaultWebSecurityManager();
		manager.setRealm(shiroRealm());
		return manager;
	}

}
