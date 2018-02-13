package com.tools.dao;

import com.tools.model.DataConfig;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * Created by DT254 on 2017/11/8.
 */
@CacheConfig(cacheNames = "DataConfigCache")
public interface DataConfigDao extends JpaRepository<DataConfig, Long> {
    @Cacheable
    DataConfig findTopByCode(String code);
}
