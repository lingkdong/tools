package com.tools.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CachingConfigurerSupport;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.core.RedisTemplate;

/**
 * Usage: <b> Config caching for redis, set TTL </b>
 *
 * @author Jingyi.Yang
 *         Date 2017/8/18
 **/
@Configuration
@EnableCaching
public class CacheConfig extends CachingConfigurerSupport {
    @Value("${cache.expireTime}")
    private int expireTime;

    @Bean
    public CacheManager cacheManager(RedisTemplate redisTemplate) {
        RedisCacheManager cacheManager = new RedisCacheManager(redisTemplate);
        cacheManager.setDefaultExpiration(expireTime);
        return cacheManager;
    }
}
