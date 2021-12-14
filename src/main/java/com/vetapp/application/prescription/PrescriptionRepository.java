package com.vetapp.application.prescription;

import com.vetapp.application.comment.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrescriptionRepository extends JpaRepository<Prescription, Integer>{


    List<Prescription> findByanimalid(int animalid);
}
