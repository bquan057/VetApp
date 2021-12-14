package com.vetapp.application.prescription;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Link;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PrescriptionController {


    @Autowired
    PrescriptionService service;

    @CrossOrigin
    @GetMapping("animal/{animalid}/prescription")
    List<Prescription> getbyanimalid(@PathVariable int animalid){

        return service.getAllbyAnimalId(animalid);
    }

    @CrossOrigin
    @PostMapping("animal/{animalid}/prescription")
    Prescription addNewPrescription(@PathVariable int animalid, @RequestBody Prescription prescription){
        Prescription newPrescription = service.createNewPrescription(animalid, prescription);
        return newPrescription;
    }
}
