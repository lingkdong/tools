package com.tools.service.impl;

import com.tools.dto.BaseResponseDTO;
import com.tools.dto.ErrorInfo;
import com.tools.dto.HttpStatus;
import com.tools.service.AscIIService;
import com.tools.worker.Worker;
import org.apache.commons.lang3.CharUtils;
import org.springframework.stereotype.Service;

/**
 * Created by lk on 2018/4/26.
 */
@Service
public class AscIIServiceImpl implements AscIIService {
    @Override
    public BaseResponseDTO CharToAscII(Character character) {
        BaseResponseDTO dto = Worker.isNull("character",character);
        if (!Worker.isOK(dto)) return dto;
        if(!CharUtils.isAscii(character.charValue())){
            return new BaseResponseDTO(HttpStatus.PARAM_INCORRECT,  ErrorInfo.newErrorInfo().property
                    ("character").HttpStatus(HttpStatus.NOT_ASCII).build());
        }
        return Worker.OK((int)character.charValue());
    }
}
