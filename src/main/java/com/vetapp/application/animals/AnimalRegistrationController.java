package com.vetapp.application.animals;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnimalRegistrationController {

	@Autowired
	AnimalRepository animalRepository;
	
	@GetMapping("/api/animals")
	public ResponseEntity<List<Animal>> getAll() {
		
		List<Animal> animals = animalRepository.findAll();
		
		return new ResponseEntity<>(animals, HttpStatus.ACCEPTED);
	}
	
}
