package com.vetapp.application.animals;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.vetapp.application.animals.Animal;



public interface AnimalRepository extends JpaRepository<Animal, Integer>{

	
	List<Animal> findByAnimalid(int animalid);
	
	List<Animal> findByAnimalname(String animalname);
	
	List<Animal> findBySpecies(String species);
	
	List<Animal> findByAvailability(String availability);
	
//	@Query(value = "SELECT * FROM ANIMAL WHERE status= ? ", nativeQuery = true)
//    List<Animal> findByStatus(String status);
	
//    List<Animal> findByAnimalnameContaining(String animalname);
//    List<Animal> findBySpeciesContaining(String species);
    
    
}
