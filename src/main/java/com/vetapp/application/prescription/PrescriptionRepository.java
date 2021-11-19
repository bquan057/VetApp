package com.vetapp.application.prescription;

import com.vetapp.application.comment.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface PrescriptionRepository extends JpaRepository<Prescription, Long>{
    List<Prescription> findByAnimalidContaining(String animalid);
}
