package com.vetapp.application.treatmentmethod;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TreatmentMethodRepository extends JpaRepository<TreatmentMethod, Integer> {

    TreatmentMethod findBytreatmentmethod(String name);
}
