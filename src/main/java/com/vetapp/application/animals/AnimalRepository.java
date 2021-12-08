package com.vetapp.application.animals;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.vetapp.application.animals.Animal;



public interface AnimalRepository extends JpaRepository<Animal, Integer>{

	
	@Query(value = "SELECT * FROM ANIMAL WHERE status= ? ", nativeQuery = true)
    List<Animal> findByStatus(String status);
	
    List<Animal> findByNameContaining(String name);
    List<Animal> findBySpeciesContaining(String species);
    
    
}
