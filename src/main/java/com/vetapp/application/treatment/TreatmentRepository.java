package com.vetapp.application.treatment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

// Interface to the data base
@Repository
public interface TreatmentRepository extends JpaRepository<Treatment, Long> {

    // method to get treatment by animalid
    @Query(value = "SELECT * FROM TREATMENT WHERE animalid = ? AND status = ?", nativeQuery = true)
    List<Treatment> findByanimalidandstatus(int animalid, String status );
}
