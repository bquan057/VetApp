package com.vetapp.application.treatmentmethod;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/*
    Controller for treatment methods
 */
@RestController
public class TreatmentMethodController {

    @Autowired
    TreatmentMethodService service;

    /*
        Mapping to get all treatments
     */
    @CrossOrigin
    @GetMapping("treatmentmethods")
    List<TreatmentMethod> getTreatments(){
        return service.getAllTreatments();
    }
}
