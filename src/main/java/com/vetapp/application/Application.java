package com.vetapp.application;

import com.vetapp.application.animals.AnimalRepository;
import com.vetapp.application.request.RequestRepository;
import com.vetapp.application.user.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = {UserRepository.class, RequestRepository.class, AnimalRepository.class})
public class Application {

	public static void main(String[] args) {

		SpringApplication.run(Application.class, args);

	}

}
