package com.tools.service.impl;

import com.tools.dao.SiteNavDao;
import com.tools.dto.BaseResponseDTO;
import com.tools.dto.HttpStatus;
import com.tools.dto.SiteNavDto;
import com.tools.model.SiteNav;
import com.tools.service.SiteNavService;
import com.tools.worker.Worker;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author: dongxin
 * @Date: 2018/11/14 15:52
 **/
@Service
@Slf4j
public class SiteNavServiceImpl implements SiteNavService {
    @Autowired
    private SiteNavDao siteNavDao;

    @Override
    public BaseResponseDTO findByResourceCode(String code) {
        if (StringUtils.isBlank(code))
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, "resource code is blank.");
        List<SiteNav> list = siteNavDao.findAllByResourceCodeOrderBySortNum(code);
        if (CollectionUtils.isNotEmpty(list)) {
            List<SiteNavDto> siteNavDtos = new ArrayList<>();
            list.stream().forEach(siteNav -> siteNavDtos.add(toDto(siteNav)));
            return Worker.OK(siteNavDtos);
        }
        return Worker.OK();
    }


    private SiteNavDto toDto(SiteNav siteNav) {
        SiteNavDto dto = new SiteNavDto();
        BeanUtils.copyProperties(siteNav, dto);
        return dto;
    }
}
