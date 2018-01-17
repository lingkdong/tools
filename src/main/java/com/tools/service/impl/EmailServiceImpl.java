package com.tools.service.impl;

import com.tools.dto.EmailDto;
import com.tools.service.EmailService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.mail.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.io.File;

/**
 * Created by DT254 on 2018/1/13.
 */
@Slf4j
@Service
public class EmailServiceImpl implements EmailService {
    @Value("${prefox.official.email.host}")
    private String host;
    @Value("${prefox.official.email.port}")
    private int port;
    @Value("${prefox.official.email.from}")
    private String from;
    @Value("${prefox.official.email.user}")
    private String user;
    @Value("${prefox.official.email.pass}")
    private String pass;
    private void init(Email email, EmailDto dto) throws
            EmailException {
        Assert.notNull(dto.getEmailTo(), "emailTo  is null.");
        email.setHostName(host);
        email.setSmtpPort(port);
        email.setAuthenticator(new DefaultAuthenticator(user, pass));
        email.setSSLOnConnect(true);
        email.setFrom(from);
        email.addTo(dto.getEmailTo());
        if(StringUtils.isNotBlank(dto.getEmailCCTo()))email.addCc(dto.getEmailCCTo());
        if(StringUtils.isNotBlank(dto.getSubjet()))email.setSubject(dto.getSubjet());
        if(StringUtils.isNotBlank(dto.getMsg()))email.setMsg(dto.getMsg());
    }

    @Override
    public boolean send(EmailDto dto) {
        Assert.notNull(dto, "emailDto  is null.");
        try {
            Email email = new SimpleEmail();
            init(email, dto);
            email.send();
            return true;
        } catch (EmailException e) {
            log.error("<send email error  : " + e + " in " + e.getStackTrace()[0].toString() + ">");
        }
        return false;
    }

    @Override
    public boolean sendWithAttachment(EmailDto dto) {
        Assert.notNull(dto, "emailDto  is null.");
        try {
            MultiPartEmail email = new MultiPartEmail();
            init(email, dto);
            if (CollectionUtils.isNotEmpty(dto.getFiles())) {
                for (File file : dto.getFiles()) {
                    email.attach(file);
                }
            }
            email.send();
            return true;
        } catch (EmailException e) {
            log.error("<send email error  : " + e + " in " + e.getStackTrace()[0].toString() + ">");
        }
        return false;
    }

    @Override
    public boolean sendHtmlEmail(EmailDto dto) {
        Assert.notNull(dto, "emailDto  is null.");
        try {
            HtmlEmail email = new HtmlEmail();
            init(email, dto);
            email.setCharset("utf-8");
            email.send();
            return true;
        } catch (EmailException e) {
            log.error("<send email error  : " + e + " in " + e.getStackTrace()[0].toString() + ">");
        }
        return false;
    }


}
