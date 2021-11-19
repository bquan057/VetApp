package com.vetapp.application.weight;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeightRepository extends JpaRepository<Weight, Integer>{
    List<Weight> findByAnimalidContaining(String animalid);
}
