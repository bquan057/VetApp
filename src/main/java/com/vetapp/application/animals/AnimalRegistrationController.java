package com.vetapp.application.animals;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.vetapp.application.animals.Animal;
import com.vetapp.application.animals.AnimalService;

@RestController
public class AnimalRegistrationController {
	
	@Autowired
    AnimalService service;
	
    /**
     * Gets all animals.
     * @return animals, a list of all animals.
     */
    @CrossOrigin
	@GetMapping("/animal")
	public ResponseEntity<List<Animal>> findAll() {
		
		List<Animal> animals = service.findAll();
		
		return new ResponseEntity<>(animals, HttpStatus.ACCEPTED);
	}
    
    /**
     * Searches by one of many filters.
     * @param animalid, a filter to search for animal by id.
     * @param animalname, a filter to search for animals by name.
     * @param species, a filter to search for animals by species.
     * @return a list of animals that satisfy the filter.
     */
    @CrossOrigin
	@GetMapping("/animal/search")
	public ResponseEntity<List<Animal>> findBy(@RequestParam(required = false) Integer animalid, @RequestParam(required = false) String animalname,
			@RequestParam(required = false) String species, @RequestParam(required = false) String availability) {
		
    	List<Animal> animals = null;
    	
		if (animalid != null) {
			animals = service.findByAnimalid(animalid);
		}
		else if (animalname != null) {
			animals = service.findByAnimalname(animalname);
		}
		else if (species != null) {
			animals = service.findBySpecies(species);
		}
		else if (availability != null) {
			animals = service.findByAvailability(availability);
		}
		
		return new ResponseEntity<>(animals, HttpStatus.ACCEPTED);
	}
    
    /**
     * Posts the new animal to the database.
     * @param newAnimal, the animal to be created.
     * @return animalCreated, the newly created animal.
     */
    @CrossOrigin
    @PostMapping("/animal")
	public ResponseEntity<Animal> post(@RequestBody Animal newAnimal) {
			
		Animal animalForCreation = new Animal();
	    animalForCreation.setAnimalname(newAnimal.getAnimalname());
	    animalForCreation.setTattoo(newAnimal.getTattoo());
	    animalForCreation.setAge(newAnimal.getAge());
	    animalForCreation.setBirthdate(newAnimal.getBirthdate());
	    animalForCreation.setBreed(newAnimal.getBreed());
	    animalForCreation.setSex(newAnimal.getSex());
	    animalForCreation.setCoatcolour(newAnimal.getCoatcolour());
	    animalForCreation.setIsactive(newAnimal.getIsactive());
	    animalForCreation.setRfid(newAnimal.getRfid());
	    animalForCreation.setSpecies(newAnimal.getSpecies());
	    animalForCreation.setAvailability(newAnimal.getAvailability());
	      
	    Animal animalCreated = service.save(animalForCreation);
	    
	    return new ResponseEntity<>(animalCreated, HttpStatus.ACCEPTED);
	}
    
    
    /**
     * Updates the animal.
     * @param animalid, the id of the animal to be updated.
     * @param animal, the animal's attributes to be updated.
     * @return animalWithUpdate, the newly updated animal.
     */
    @CrossOrigin
    @PutMapping("/animal/{animalid}")
    public ResponseEntity<Animal> updateAnimal(@PathVariable int animalid, @RequestBody Animal animal) {
    	
        Animal animalForUpdate = service.findByAnimalid(animalid).get(0);
        
        animalForUpdate.setAnimalid(animalid);
        if (animal.getTattoo() != null) {
        	animalForUpdate.setTattoo(animal.getTattoo());
        }
        if (animal.getAge() != null) {
        	animalForUpdate.setAge(animal.getAge());
        }
        if (animal.getIsactive() != null) {
        	animalForUpdate.setIsactive(animal.getIsactive());
        }
        if (animal.getRfid() != 0) {
        	animalForUpdate.setRfid(animal.getRfid());
        }
        if (animal.getAvailability() != null) {
        	animalForUpdate.setAvailability(animal.getAvailability());
        }
        
        Animal animalWithUpdate = service.save(animalForUpdate);
        
        return new ResponseEntity<>(animalWithUpdate, HttpStatus.ACCEPTED);
    }
	
    /**
     * Deletes the animal with the specified id.
     * @param animalid, the id of the animal to be deleted.
     * @return
     */
    @CrossOrigin
    @DeleteMapping("/animal/{animalid}")
    public ResponseEntity<Animal> deleteAnimal(@PathVariable int animalid) {
    	try {
    		Animal animalForDeletion = service.findByAnimalid(animalid).get(0);
        	
        	service.deleteById(animalForDeletion.getAnimalid());
     
        	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    	}
    	catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    	
    }

}
