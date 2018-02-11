package com.tools.service.impl;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.DateCalculateDto;
import com.tools.dto.ErrorInfo;
import com.tools.dto.HttpStatus;
import com.tools.service.DateService;
import com.tools.utils.DateUtil;
import com.tools.worker.Worker;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.time.DateUtils;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Created by DT254 on 2018/2/9.
 */
@Service
public class DateServiceImpl implements DateService {
    @Override
    public BaseResponseDTO betweenDate(DateCalculateDto dateCalculateDto) {
        List<ErrorInfo> errorInfos = new ArrayList<>();
        BaseResponseDTO dto = Worker.isNull("startDate",dateCalculateDto.getStartDate());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        dto = Worker.isNull("endDate",dateCalculateDto.getEndDate());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        if (CollectionUtils.isNotEmpty(errorInfos)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, errorInfos);
        Integer differ= DateUtil.getDiffDay(dateCalculateDto.getStartDate(),dateCalculateDto.getEndDate());
        if(differ==null)  return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,  ErrorInfo.newErrorInfo().property
                ("differ").HttpStatus(HttpStatus.PARAM_INCORRECT).build());
        Map map=new HashMap();
        map.put("startDate",DateUtil.formatDate(dateCalculateDto.getStartDate(),DateUtil.DATE_FORMAT));
        map.put("endDate",DateUtil.formatDate(dateCalculateDto.getEndDate(),DateUtil.DATE_FORMAT));
        map.put("differ",differ);
        return Worker.OK(map);
    }

    @Override
    public BaseResponseDTO dateAdd(DateCalculateDto dateCalculateDto) {
        List<ErrorInfo> errorInfos = new ArrayList<>();
        BaseResponseDTO dto = Worker.isNull("startDate",dateCalculateDto.getStartDate());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());
        if(!DateCalculateDto.operators.contains(dateCalculateDto.getOperator())){
            errorInfos.add( ErrorInfo.newErrorInfo().property("operator")
                    .HttpStatus(HttpStatus.INVALID_FORMAT).build());
        }
        dto = Worker.isNull("differ",dateCalculateDto.getDiffer());
        if (!Worker.isOK(dto)) errorInfos.add((ErrorInfo) dto.getData());

        if (CollectionUtils.isNotEmpty(errorInfos)) return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT, errorInfos);
        Date endDate;
        String operator="-";
        if("add".equals(dateCalculateDto.getOperator())){
            endDate= DateUtils.addDays(dateCalculateDto.getStartDate(),dateCalculateDto.getDiffer().intValue());
            operator="+";
        }else {
            endDate= DateUtils.addDays(dateCalculateDto.getStartDate(),-dateCalculateDto.getDiffer().intValue());
        }
        Map map=new HashMap();
        map.put("startDate",DateUtil.formatDate(dateCalculateDto.getStartDate(),DateUtil.DATE_FORMAT));
        map.put("operator",operator);
        map.put("differ",dateCalculateDto.getDiffer());
        map.put("endDate",DateUtil.formatDate(endDate,DateUtil.DATE_FORMAT));
        return Worker.OK(map);
    }
}
