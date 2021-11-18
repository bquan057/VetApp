package com.vetapp.application.animals;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;



public interface AnimalRepository extends JpaRepository<Animal, String>{

	// TODO: Add exceptions.
    List<Animal> findByNameContaining(String name);
    List<Animal> findBySpeciesContaining(String species);
//    Animal updateAnimal(Animal animal);
    
    
}
