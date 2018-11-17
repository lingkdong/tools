package com.tools.service;

import com.tools.dto.BaseResponseDTO;

/**
 * @Author: dongxin
 * @Date: 2018/11/14 15:50
 **/
public interface SiteNavService {
    BaseResponseDTO findByResourceCode(String code);
}
