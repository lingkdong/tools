package com.tools.dao;

import com.tools.model.Category;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * Created by lk on 2017/11/8.
 */
@CacheConfig(cacheNames = "CategoryCache")
public interface CategoryDao extends JpaRepository<Category, Long> {
    Page<Category> findByNameContainingOrCodeContainingOrTagsContainingOrderBySortNum(String searchName,
                                                                                      String searchCode,
                                                                                      String tag,
                                                                                      Pageable pageable);

    Page<Category> findAllByOrderBySortNum(Pageable pageable);

    @Cacheable
    Category findTopByCode(String code);

    @Cacheable
    Category findById(Long id);


}
