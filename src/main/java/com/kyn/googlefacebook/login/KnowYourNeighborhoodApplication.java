package com.kyn.googlefacebook.login;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.kyn.googlefacebook.login.configuration.AppProperties;

@SpringBootApplication
@EnableConfigurationProperties (AppProperties.class)
public class KnowYourNeighborhoodApplication {

	public static void main(String[] args) {
		SpringApplication.run(KnowYourNeighborhoodApplication.class, args);
	}

}
