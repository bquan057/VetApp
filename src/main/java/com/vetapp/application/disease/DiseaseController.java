package com.vetapp.application.disease;

import com.vetapp.application.treatmentmethod.TreatmentMethod;
import com.vetapp.application.treatmentmethod.TreatmentMethodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DiseaseController {
    @Autowired
    DiseaseService service;

    /*
        Mapping to get all treatments
     */
    @CrossOrigin
    @GetMapping("disease")
    ResponseEntity<List<Disease>> getDisease(){

        return new ResponseEntity<>(service.getAllDiseases(), HttpStatus.OK);
    }
}
