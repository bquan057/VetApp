package com.vetapp.application.treatmentmethod;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreatmentMethodService {

    @Autowired
    TreatmentMethodRepository repository;

    public List<TreatmentMethod> getAllTreatments() {
        return repository.findAll();
    }

    /*
        Get treatment id by name
     */
    public int getTreatmentIdByName(String tName){

        TreatmentMethod method = repository.findBytreatmentmethod(tName);

        return method.getTreatmentid();
    }
}