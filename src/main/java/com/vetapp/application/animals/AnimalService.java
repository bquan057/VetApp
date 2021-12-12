package com.vetapp.application.animals;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalService {

    @Autowired
    AnimalRepository repository;

    public List<Animal> findAll() {
		return repository.findAll();
	}

	public List<Animal> findByAnimalid(int animalid) {
		return repository.findByAnimalid(animalid);
	}
	
	public List<Animal> findByAnimalname(String animalname) {
		return repository.findByAnimalname(animalname);
	}
	
	public List<Animal> findBySpecies(String species) {
		return repository.findBySpecies(species);
	}
	
	public Animal save(Animal updatedAnimal) {
		return repository.save(updatedAnimal);
	}
    
	public void deleteById(int animalid) {
		repository.deleteById(animalid);
		return;
	}
//    /*
//        get all animals of a specified status
//     */
//    public List<Animal> getAnimalByStatus(String status) {
//        return repository.findByStatus(status);
//    }
//
//    /*
//        update animal status
//     */
//    public Animal updatedAnimalStatus(Animal animal) {
//        int animalId = animal.getAnimalid();
//        String status = animal.getStatus();
//        // get animal to update
//        Animal animalToUpdate = repository.findById(animalId).get();
//        // update animals status
//        animalToUpdate.setStatus(status);
//        // add to db
//        repository.save(animalToUpdate);
//
//        return animalToUpdate;
//    }
}
