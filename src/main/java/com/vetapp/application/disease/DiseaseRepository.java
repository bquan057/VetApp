package com.vetapp.application.disease;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiseaseRepository extends JpaRepository<Disease, Integer> {

    Disease findBydiseasename(String dName);
}
