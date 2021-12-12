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
    
    @CrossOrigin
	@GetMapping("/animal/search")
	public ResponseEntity<List<Animal>> findBy(@RequestParam(required = false) Integer animalid, @RequestParam(required = false) String animalname,
			@RequestParam(required = false) String species) {
		
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
		
		return new ResponseEntity<>(animals, HttpStatus.ACCEPTED);
	}
    
    @CrossOrigin
    @PutMapping("/animal/{animalid}")
    public ResponseEntity<Animal> updateAnimal(@PathVariable int animalid, @RequestBody Animal animal) {
    	
        Animal animalForUpdate = service.findByAnimalid(animalid).get(0);
        
        animalForUpdate.setAnimalid(animalid);
        animalForUpdate.setTattoo(animal.getTattoo());
        animalForUpdate.setAge(animal.getAge());
        animalForUpdate.setIsactive(animal.getIsactive());
        animalForUpdate.setRfid(animal.getRfid());
        
        Animal animalWithUpdate = service.save(animalForUpdate);
        
        return new ResponseEntity<>(animalWithUpdate, HttpStatus.ACCEPTED);
    }
	
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
    
//    /*
//    Get mapping to get animal by status
//     */
//    @CrossOrigin
//	@GetMapping("/animals/status/{status}")
//	ResponseEntity<List<Animal>> getAnimalbyStatus(@PathVariable String status){
//    	List<Animal> animals = service.getAnimalByStatus(status);
//
//    	return new ResponseEntity<>(animals, HttpStatus.ACCEPTED);
//    }
    
//	@GetMapping("/animals/animal_id/{animal_id}")
//	public ResponseEntity<Optional<Animal>> getByID(@PathVariable int animal_id) {
//		Optional<Animal> animals = animalRepository.findById(animal_id);
//		
//		return new ResponseEntity<>(animals, HttpStatus.ACCEPTED);
//	}
//		
//	@GetMapping("/animals/name/{name}")
//	public ResponseEntity<List<Animal>> getByName(@PathVariable String name) {
//		List<Animal> animals = animalRepository.findByNameContaining(name);
//		
//		return new ResponseEntity<>(animals, HttpStatus.ACCEPTED);
//	}
//	
//	@GetMapping("/animals/species/{species}")
//	public ResponseEntity<List<Animal>> getBySpecies(@PathVariable String species) {
//		List<Animal> animals = animalRepository.findBySpeciesContaining(species);
//		
//		return new ResponseEntity<>(animals, HttpStatus.ACCEPTED);
//	}
//	
//	@PostMapping(path = "/animals", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<Animal> post(@RequestBody Animal newAnimal) {
//		
//		Animal animalForCreation = new Animal();
//		animalForCreation.setAnimalid(newAnimal.getAnimalid());
//        animalForCreation.setName(newAnimal.getName());
//        animalForCreation.setTattoo(newAnimal.getTattoo());
//        animalForCreation.setAge(newAnimal.getAge());
//        animalForCreation.setBirthdate(newAnimal.getBirthdate());
//        animalForCreation.setBreed(newAnimal.getBreed());
//        animalForCreation.setSex(newAnimal.getSex());
//        animalForCreation.setCoatcolour(newAnimal.getCoatcolour());
//        animalForCreation.setIsactive(newAnimal.getIsactive());
//        animalForCreation.setRdifid(newAnimal.getRdifid());
//        animalForCreation.setSpecies(newAnimal.getSpecies());
//        animalForCreation.setStatus(newAnimal.getStatus());
//        
//        Animal animalCreated = animalRepository.save(animalForCreation);
//        return new ResponseEntity<>(animalCreated, HttpStatus.ACCEPTED);
//    }
//
//    
//    /*
//    mapping to update an animals status
//     */
//	@CrossOrigin
//	@PutMapping("/animals/status")
//	ResponseEntity<Animal> updatedAnimalStatus(@RequestBody Animal animal){
//	
//	    Animal animalToUpdate = service.updatedAnimalStatus(animal);
//	
//	    return new ResponseEntity<>(animalToUpdate, HttpStatus.ACCEPTED);
//	}
//	
//    @DeleteMapping("/animals/{animal_id}")
//    public ResponseEntity<String> deleteUser(@PathVariable int animal_id){
//
//        if(animalRepository.existsById(animal_id)){
//            Animal animalToDelete = animalRepository.getById(animal_id);
//            animalRepository.delete(animalToDelete);
//            return new ResponseEntity<String>("Animal deleted.", HttpStatus.ACCEPTED);
//        }
//        else {
//        	return new ResponseEntity<String>("Animal not found.", HttpStatus.ACCEPTED);
//        }
//    }
}
