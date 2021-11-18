package com.vetapp.application.animals;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	public ResponseEntity<Optional<Animal>> getByID(@PathVariable int animal_id) {
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
	
	@PostMapping(path = "/api/animals", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Animal> post(@RequestBody Animal newAnimal) {
		
		Animal animalForCreation = new Animal();
		animalForCreation.setAnimal_id(newAnimal.getAnimal_id());
        animalForCreation.setName(newAnimal.getName());
        animalForCreation.setAnimal_status(newAnimal.getAnimal_status());
        animalForCreation.setSpecies(newAnimal.getSpecies());
        
        System.out.println("Made it here.");
        
        Animal animalCreated = animalRepository.save(animalForCreation);
        return new ResponseEntity<>(animalCreated, HttpStatus.ACCEPTED);
    }

    @PutMapping(path = "/api/animals/{animal_id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Animal> put(@PathVariable int animal_id, @RequestBody Animal animal) {
        Animal animalForUpdate = animalRepository.findById(animal_id).orElseThrow();
        
        // TODO: Set all attributes.
        animalForUpdate.setAnimal_id(animal_id);
        animalForUpdate.setName(animal.getName());
        animalForUpdate.setAnimal_status(animal.getAnimal_status());
        animalForUpdate.setSpecies(animal.getSpecies());
        
        Animal animalWithUpdate = animalRepository.save(animalForUpdate);
        
        return new ResponseEntity<>(animalWithUpdate, HttpStatus.ACCEPTED);
    }
	
    @DeleteMapping("api/animals/{animal_id}")
    public ResponseEntity<String> deleteUser(@PathVariable int animal_id){

        if(animalRepository.existsById(animal_id)){
            Animal animalToDelete = animalRepository.getById(animal_id);
            animalRepository.delete(animalToDelete);
            return new ResponseEntity<String>("Animal deleted.", HttpStatus.ACCEPTED);
        }
        else {
        	return new ResponseEntity<String>("Animal not found.", HttpStatus.ACCEPTED);
        }
    }
}
