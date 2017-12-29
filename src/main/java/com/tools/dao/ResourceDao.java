package com.tools.dao;

import com.tools.model.Category;
import com.tools.model.Resource;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;
import java.util.List;


/**
 * Created by DT254 on 2017/11/8.
 */
@CacheConfig(cacheNames = "ResourceCache")
public interface ResourceDao extends CrudRepository<Resource, Long> {
   @Cacheable
   List<Resource> findAllByCategoryIdIn(Collection<Long> CategoryIds);
   @Cacheable
   List<Resource> findAllByCategoryId(Long categoryId);
   @Cacheable
   Resource findTopByCode(String code);
}
