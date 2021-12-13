package com.vetapp.application.treatment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.Repository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/*
    Controller to manage interactions between View and Model
 */
@RestController
public class TreatmentController {

   @Autowired
   TreatmentService service;

    // Mapping to get animal treatments based on status
    @CrossOrigin
    @GetMapping("animal/{animalid}/treatment")
    public ResponseEntity<List<Treatment>> getTreatments(@PathVariable int animalid, @RequestParam(required = false) String status){

        List<Treatment> treatments = service.getByStatusandAnimalid(animalid, status);
        return new ResponseEntity<>(treatments, HttpStatus.OK);
    }

    // Mapping to add a new treatment for an animal
//    @PostMapping("/api/animals/{animalid}/treatments")
//    public ResponseEntity<Treatment> addTreatment(@PathVariable String animalid,
//                                                  @RequestBody Treatment newTreament){
////        newTreament.setAnimalid(animalid);
//        Treatment treatment = repository.save(newTreament);
//        return new ResponseEntity<>(treatment, HttpStatus.OK);
//    }

    // method to update an animals treatment type
//    @PutMapping("/api/animals/treatments/{treatmentid}")
//    public ResponseEntity<Treatment> updateTreatment(@PathVariable long treatmentid,
//                                                     @RequestBody Treatment treatment){
//        Treatment treatmentToUpdate = repository.findById(treatmentid).get();
//
//        // update the treatment
//        treatmentToUpdate.setTreatmenttype(treatment.getTreatmenttype());
//        repository.save(treatmentToUpdate);
//
//        return new ResponseEntity<>(treatmentToUpdate, HttpStatus.OK);
//    }

}
