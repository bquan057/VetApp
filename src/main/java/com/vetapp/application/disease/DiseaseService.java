package com.vetapp.application.disease;

import com.vetapp.application.treatmentmethod.TreatmentMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiseaseService {

    @Autowired
    DiseaseRepository repository;

    /*
        Method to return all disease
     */
    public List<Disease> getAllDiseases() {
        return repository.findAll();
    }
}
