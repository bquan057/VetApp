package com.vetapp.application.weight;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeightRepository extends JpaRepository<Weight, Integer>{

    /*
        Query to get weights by specified animalid from the DB
     */
    List<Weight> findByAnimalid(int animalid);

}
