package com.tools.service;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.DateCalculateDto;

/**
 * Created by lk on 2018/2/9.
 */
public interface DateService {
    BaseResponseDTO betweenDate(DateCalculateDto dateCalculateDto);

    BaseResponseDTO dateAdd(DateCalculateDto dateCalculateDto);
}
