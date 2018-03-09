package com.tools.dao;

import com.tools.model.Resource;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;


/**
 * Created by lk on 2017/11/8.
 */
@CacheConfig(cacheNames = "ResourceCache")
public interface ResourceDao extends JpaRepository<Resource, Long> {
   @Cacheable
   List<Resource> findAllByCategoryIdInOrderBySortNum(Collection<Long> CategoryIds);
   @Cacheable
   List<Resource> findAllByCategoryIdOrderBySortNum(Long categoryId);
   @Cacheable
   Resource findTopByCode(String code);
}
