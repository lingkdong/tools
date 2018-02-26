package com.tools.service.impl;

import com.tools.service.OpenOfficeService;
import lombok.extern.slf4j.Slf4j;
import org.jodconverter.DocumentConverter;
import org.jodconverter.JodConverter;
import org.jodconverter.office.LocalOfficeManager;
import org.jodconverter.office.OfficeUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.File;
import java.net.ConnectException;

/**
 * Created by DT254 on 2018/2/22.
 */
@Slf4j
@Service
public class OpenOfficeServiceImpl implements OpenOfficeService {
    @Value("${prefox.openOffice.home}")
    private String home;
    @Value("${prefox.openOffice.host}")
    private String host;
    @Value("${prefox.openOffice.port}")
    private int port;
    @Override
    public boolean convert(File orig, File dest) {
        final LocalOfficeManager officeManager = LocalOfficeManager.builder().officeHome(home).install().build();
        try {
            officeManager.start();
            // Convert
            JodConverter
                    .convert(orig)
                    .to(dest)
                    .execute();
            return true;
        } catch (Exception e) {
            log.error("<OpenOfficeServiceImpl.convert failed,fileName:{} {} {}  >",orig.getName()
                    , e, e.getStackTrace  ()[0].toString());
        } finally {
            OfficeUtils.stopQuietly(officeManager);
        }
        return false;
    }
}
