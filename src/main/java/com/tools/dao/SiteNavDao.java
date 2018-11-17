package com.tools.dao;

import com.tools.model.SiteNav;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @Author: dongxin
 * @Date: 2018/11/14 15:45
 **/
@CacheConfig(cacheNames = "SiteNavDao", keyGenerator = "keyGenerator")
public interface SiteNavDao extends JpaRepository<SiteNav, Long> {
    @Cacheable
    List<SiteNav> findAllByResourceCodeOrderBySortNum(String code);
}
