package com.tools.config;

import com.tools.service.FileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * Created by lk on 2018/3/9.
 */
@Configuration
@Component
@EnableScheduling
@Slf4j
public class ScheduleConfig {
    @Autowired
    private FileService fileService;
    @Scheduled(cron = "1 1 23 * * ?")
//    @Scheduled(cron = "1 32 17 * * ?")
    public void delTemp(){
        log.info("delete temp start");
        log.info("delete upload temp and status:"+fileService.delUploadTemp());
        log.info("delete download temp and status:"+fileService.delDownTemp());
        log.info("delete temp end");
    }

}
