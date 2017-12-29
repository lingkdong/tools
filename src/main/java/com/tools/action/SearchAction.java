package com.tools.action;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.CategoryDto;
import com.tools.dto.HttpStatus;
import com.tools.model.Category;
import com.tools.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

/**
 * Created by DT254 on 2017/8/30.
 */
@RestController
@RequestMapping("tools")
public class SearchAction extends BaseAction{
    @Autowired
    private CategoryService categoryService;
    @PostMapping(value = "/search")
    public BaseResponseDTO search(@RequestParam(value = "q", required = false) String searchKey, Pageable
            pageable) {
        Page<CategoryDto> categories = categoryService.find(searchKey, pageable.next());
        return new BaseResponseDTO(HttpStatus.OK, categories);
    }

    @GetMapping(value = "/cache-test")
    public BaseResponseDTO test() {
        Category category=categoryService.findByCode("format");
        return new BaseResponseDTO(HttpStatus.OK, category);
    }

}
