package com.tools.service;

import com.tools.dto.CategoryDto;
import com.tools.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * Created by DT254 on 2017/11/8.
 */
public interface CategoryService {
    Page<CategoryDto> find(String searchKey, Pageable pageable);

    Category findByCode(String code);

    CategoryDto findDtoById(Long id);

}
