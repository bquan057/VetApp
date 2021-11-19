package com.vetapp.application.treatment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/*
    Controller to manage interactions between View and Model
 */
@RestController
public class TreatmentController {

    @Autowired
    TreatmentRepository repository;

    // Mapping to get all treatments for an animal with the specified id
    @GetMapping("api/animals/{animalid}/treatments")
    public ResponseEntity<List<Treatment>> getTreatments(@PathVariable String animalid){
        List<Treatment> treatments = repository.findAllByAnimalidContaining(animalid);
        return new ResponseEntity<>(treatments, HttpStatus.OK);
    }
}
