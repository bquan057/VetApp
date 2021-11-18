package com.vetapp.application.animals;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@GetMapping("/api/animals/animal_id/{animal_id}")
	public ResponseEntity<Optional<Animal>> getByID(@PathVariable String animal_id) {
		Optional<Animal> animals = animalRepository.findById(animal_id);
		
		return new ResponseEntity<>(animals, HttpStatus.ACCEPTED);
	}
		
	@GetMapping("/api/animals/name/{name}")
	public ResponseEntity<List<Animal>> getByName(@PathVariable String name) {
		List<Animal> animals = animalRepository.findByNameContaining(name);
		
		return new ResponseEntity<>(animals, HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/api/animals/species/{species}")
	public ResponseEntity<List<Animal>> getBySpecies(@PathVariable String species) {
		List<Animal> animals = animalRepository.findBySpeciesContaining(species);
		
		return new ResponseEntity<>(animals, HttpStatus.ACCEPTED);
	}
}
