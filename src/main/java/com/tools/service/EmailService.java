package com.tools.service;

import com.tools.dto.EmailDto;

/**
 * Created by DT254 on 2018/1/13.
 */
public interface EmailService {
    boolean send(EmailDto dto);

    boolean sendWithAttachment(EmailDto dto);

    boolean sendHtmlEmail(EmailDto dto);
}
