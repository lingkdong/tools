package com.tools.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;

/**
 * Created by lk on 2017/9/5.
 */
@Configuration
@EntityScan("com.tools.model")
public class EntityConfig {
}
