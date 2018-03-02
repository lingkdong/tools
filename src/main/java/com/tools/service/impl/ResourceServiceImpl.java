package com.tools.service.impl;

import com.tools.dao.ResourceDao;
import com.tools.dto.ResourceDto;
import com.tools.model.Resource;
import com.tools.service.ResourceService;
import com.tools.utils.BeanUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.MapUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Created by lk on 2017/11/14.
 */
@Service
@Slf4j
public class ResourceServiceImpl implements ResourceService {
    @Autowired
    private ResourceDao resourceDao;

    @Override
    public Map<Long, List<Resource>> groupByCategory(List<Resource> resources) {
        if (CollectionUtils.isNotEmpty(resources)) {
            Map<Long, List<Resource>> result = new HashMap<>();
            for (Resource item : resources) {
                if (result.get(item.getCategoryId()) == null) {
                    result.put(item.getCategoryId(), new ArrayList<>());
                }
                result.get(item.getCategoryId()).add(item);
            }
            return result;
        }
        return MapUtils.EMPTY_MAP;
    }

    @Override
    public Map<Long, List<ResourceDto>> groupByCategory2(List<Resource> resources) {
        if (CollectionUtils.isNotEmpty(resources)) {
            Map<Long, List<ResourceDto>> result = new HashMap<>();
            for (Resource item : resources) {
                if (result.get(item.getCategoryId()) == null) {
                    result.put(item.getCategoryId(), new ArrayList<>());
                }
                result.get(item.getCategoryId()).add(BeanUtil.cast(ResourceDto.class, item));
            }
            return result;
        }
        return MapUtils.EMPTY_MAP;
    }

    @Override
    public List<Resource> findAllByCategoryIdIn(Collection<Long> categoryIds) {
        return resourceDao.findAllByCategoryIdIn(categoryIds);
    }

    @Override
    public List<Resource> findAllByCategoryId(Long categoryId) {
        return resourceDao.findAllByCategoryId(categoryId);
    }

    @Override
    public List<ResourceDto> toDto(List<Resource> resources) {
        if (CollectionUtils.isNotEmpty(resources)) {
            List<ResourceDto> resourceDtos = new ArrayList<>(resources.size());
            for (Resource item : resources) {
                resourceDtos.add(BeanUtil.cast(ResourceDto.class, item));
            }
            return resourceDtos;
        }
        return Collections.EMPTY_LIST;
    }

    @Override
    public Resource findByCode(String code) {
        return resourceDao.findTopByCode(code);
    }
}
