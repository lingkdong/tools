package com.tools.service;

import com.tools.model.DataConfig;

/**
 * Created by DT254 on 2018/2/13.
 */
public interface DataConfigService {
    DataConfig findByCode(String code);
}
