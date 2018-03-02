package com.tools.service;

import com.tools.dto.ResourceDto;
import com.tools.model.Resource;

import java.util.Collection;
import java.util.List;
import java.util.Map;

/**
 * Created by lk on 2017/11/14.
 */
public interface ResourceService {
    Map<Long, List<Resource>> groupByCategory(List<Resource> resources);

    Map<Long, List<ResourceDto>> groupByCategory2(List<Resource> resources);

    List<Resource> findAllByCategoryIdIn(Collection<Long> categoryIds);

    List<Resource> findAllByCategoryId(Long categoryId);

    List<ResourceDto> toDto(List<Resource> resources);

    Resource findByCode(String code);
}
