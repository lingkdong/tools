package com.tools.service.impl;

import com.tools.dao.CategoryDao;
import com.tools.dto.CategoryDto;
import com.tools.dto.ResourceDto;
import com.tools.model.Category;
import com.tools.model.Resource;
import com.tools.service.CategoryService;
import com.tools.service.ResourceService;
import com.tools.utils.BeanUtil;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Created by lk on 2017/11/8.
 */
@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryDao categoryDao;
    @Autowired
    private ResourceService resourceService;

    @Override
    public Page<CategoryDto> find(String searchKey, Pageable pageable) {
        Page categories = (StringUtils.isBlank(searchKey)) ? categoryDao.findAllByOrderBySortNum(pageable)
                : categoryDao.findByNameContainingOrCodeContainingOrTagsContainingOrderBySortNum(searchKey,
                searchKey, searchKey,
                pageable);

        if (categories.hasContent()) {
            // collect  categoryId ;
            Set<Long> categoryIds = new HashSet<>();
            List<CategoryDto> categoryDtos = new ArrayList<>(categories.getContent().size());
            for (Category item : (List<Category>) categories.getContent()) {
                categoryIds.add(item.getId());
                categoryDtos.add(BeanUtil.cast(CategoryDto.class, item));
            }
            //get   resource
            Map<Long, List<ResourceDto>> map = resourceService.groupByCategory2(resourceService.findAllByCategoryIdIn
                    (categoryIds));
            if (MapUtils.isNotEmpty(map)) {
                for (CategoryDto item : categoryDtos) {
                    item.setResourceDtos(map.get(item.getId()));
                }
            }
            Page<CategoryDto> result = new PageImpl<>(categoryDtos, new PageRequest(categories.getNumber(), categories.getSize()),
                    categories
                            .getTotalElements());
            return result;
        }
        return categories;
    }

    @Override
    public Category findByCode(String code) {
        return categoryDao.findTopByCode(code);
    }

    @Override
    public CategoryDto findDtoById(Long id) {
        Category category = categoryDao.findById(id);
        if (category == null) return null;
        CategoryDto dto = new CategoryDto();
        BeanUtil.copy(dto, category);
        dto.setResourceDtos(resourceService.toDto(resourceService.findAllByCategoryId(category.getId())));
        return dto;
    }

}
