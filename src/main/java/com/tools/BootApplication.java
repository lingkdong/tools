package com.tools;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;

import javax.servlet.MultipartConfigElement;

@SpringBootApplication
public class BootApplication {
	@Value("${prefox.file.upload.basic}")
	private String uploadPath;
	public static void main(String[] args) {
		SpringApplication.run(BootApplication.class, args);
	}

	@Bean
	public MultipartConfigElement multipartConfigElement() {
		MultipartConfigFactory factory = new MultipartConfigFactory();
		factory.setMaxFileSize("2MB"); //KB,MB
		factory.setMaxRequestSize("2MB");
		//Sets the directory location where files will be stored.
		factory.setLocation(uploadPath);
		return factory.createMultipartConfig();
	}
}
