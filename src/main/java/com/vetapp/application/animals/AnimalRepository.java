package com.vetapp.application.animals;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;



public interface AnimalRepository extends JpaRepository<Animal, String>{

	// TODO: Add exceptions.
//    List<Animal> getAnimalById(String animalId);
//    List<Animal> getAnimalsByName(String animalName);
//    List<Animal> getAnimalsBySpecies(String animalSpecies);
//    Animal updateAnimal(Animal animal);
    
    
}
