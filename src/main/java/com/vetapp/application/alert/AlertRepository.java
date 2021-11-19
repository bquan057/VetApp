package com.vetapp.application.alert;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


@Repository
public interface AlertRepository extends JpaRepository<Alert, Long>{
    List<Alert> findByAnimalidContaining(String animalid);
}
