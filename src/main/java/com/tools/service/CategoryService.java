package com.tools.service;

import com.tools.dto.CategoryDto;
import com.tools.dto.CategoryTreeInfo;
import com.tools.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * Created by lk on 2017/11/8.
 */
public interface CategoryService {
    Page<CategoryDto> find(String searchKey, Pageable pageable);

    Category findByCode(String code);

    CategoryDto findDtoById(Long id);

    List<CategoryTreeInfo> getCategoryTree();
}
