package com.tools.service.impl;

import com.tools.dao.DataConfigDao;
import com.tools.model.DataConfig;
import com.tools.service.DataConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by DT254 on 2018/2/13.
 */
@Service
public class DataConfigServiceImpl implements DataConfigService {
    @Autowired
    private DataConfigDao dataConfigDao;
    @Override
    public DataConfig findByCode(String code) {
        return dataConfigDao.findTopByCode(code);
    }
}
