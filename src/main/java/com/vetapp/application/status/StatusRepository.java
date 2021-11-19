package com.vetapp.application.status;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatusRepository extends JpaRepository<Status, Integer>{
    List<Status> findByAnimalidContaining(String animalid);
}
