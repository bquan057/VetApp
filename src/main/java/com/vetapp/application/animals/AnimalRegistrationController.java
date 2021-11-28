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
	
	@PostMapping(path = "/api/animals", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Animal> post(@RequestBody Animal newAnimal) {
		
		Animal animalForCreation = new Animal();
		animalForCreation.setAnimalid(newAnimal.getAnimalid());
        animalForCreation.setName(newAnimal.getName());
        animalForCreation.setTattoo(newAnimal.getTattoo());
        animalForCreation.setCitytattoo(newAnimal.getCitytattoo());
        animalForCreation.setAge(newAnimal.getAge());
        animalForCreation.setBirthday(newAnimal.getBirthday());
        animalForCreation.setBirthmonth(newAnimal.getBirthmonth());
        animalForCreation.setBirthyear(newAnimal.getBirthyear());
        animalForCreation.setBreed(newAnimal.getBreed());
        animalForCreation.setSex(newAnimal.getSex());
        animalForCreation.setCoatcolour(newAnimal.getCoatcolour());
        animalForCreation.setSpecialinstructions(newAnimal.getSpecialinstructions());
        animalForCreation.setDiet(newAnimal.getDiet());
        animalForCreation.setIsactive(newAnimal.getIsactive());
        animalForCreation.setRdifid(newAnimal.getRdifid());
        animalForCreation.setHasmicrochip(newAnimal.getHasmicrochip());
        animalForCreation.setSpecies(newAnimal.getSpecies());
        
        Animal animalCreated = animalRepository.save(animalForCreation);
        return new ResponseEntity<>(animalCreated, HttpStatus.ACCEPTED);
    }

    @PutMapping(path = "/api/animals/{animal_id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Animal> put(@PathVariable String animal_id, @RequestBody Animal animal) {
        Animal animalForUpdate = animalRepository.findById(animal_id).orElseThrow();
        
        animalForUpdate.setAnimalid(animal_id);
        animalForUpdate.setName(animal.getName());
        animalForUpdate.setTattoo(animal.getTattoo());
        animalForUpdate.setCitytattoo(animal.getCitytattoo());
        animalForUpdate.setAge(animal.getAge());
        animalForUpdate.setBirthday(animal.getBirthday());
        animalForUpdate.setBirthmonth(animal.getBirthmonth());
        animalForUpdate.setBirthyear(animal.getBirthyear());
        animalForUpdate.setBreed(animal.getBreed());
        animalForUpdate.setSex(animal.getSex());
        animalForUpdate.setCoatcolour(animal.getCoatcolour());
        animalForUpdate.setSpecialinstructions(animal.getSpecialinstructions());
        animalForUpdate.setDiet(animal.getDiet());
        animalForUpdate.setIsactive(animal.getIsactive());
        animalForUpdate.setRdifid(animal.getRdifid());
        animalForUpdate.setHasmicrochip(animal.getHasmicrochip());
        animalForUpdate.setSpecies(animal.getSpecies());
        
        Animal animalWithUpdate = animalRepository.save(animalForUpdate);
        
        return new ResponseEntity<>(animalWithUpdate, HttpStatus.ACCEPTED);
    }
	
    @DeleteMapping("api/animals/{animal_id}")
    public ResponseEntity<String> deleteUser(@PathVariable String animal_id){

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
