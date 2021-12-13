package com.vetapp.application.treatment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreatmentService {

    @Autowired
    TreatmentRepository repository;

    List<Treatment> getByStatusandAnimalid(int animalid, String status){
        return repository.findByanimalidandstatus(animalid, status);
    }
}
