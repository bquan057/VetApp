package com.vetapp.application.treatment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.Repository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/*
    Controller to manage interactions between View and Model
 */
@RestController
public class TreatmentController {

   @Autowired
   TreatmentService service;

    // Mapping to get animal treatments based on status user/{userid}/treatment
    @CrossOrigin
    @GetMapping("animal/{animalid}/treatment")
    public ResponseEntity<List<Treatment>> getTreatments(@PathVariable int animalid, @RequestParam(required = false) String status){

        if (status.equals("notComplete")) {
            List<Treatment> treatmentsA = service.getByStatusandAnimalid(animalid, "approved");
            List<Treatment> treatmentsR = service.getByStatusandAnimalid(animalid, "requested");
            treatmentsA.addAll(treatmentsR);
            return new ResponseEntity<>(treatmentsA, HttpStatus.OK);
        }

        List<Treatment> treatments = service.getByStatusandAnimalid(animalid, status);

        return new ResponseEntity<>(treatments, HttpStatus.OK);
    }
    
    // Mapping to get animal treatments based on status user/{userid}/treatment
    @CrossOrigin
    @GetMapping("user/{userid}/treatment")
    public ResponseEntity<List<Treatment>> getTreatmentsByUserid(@PathVariable int userid, @RequestParam(required = false) String status){

    	List<Treatment> treatments = new ArrayList<Treatment>();
    	
    	if (status == null) {
    		treatments = service.getByUserid(userid);
    	}
    	else {
    		treatments = service.getByUseridandstatus(userid, status);
    	}

        return new ResponseEntity<>(treatments, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("animal/{animalid}/treatment")
    public ResponseEntity<Treatment> createTreatment(@PathVariable int animalid, @RequestBody Treatment treatment){

        Treatment newTreatment = service.createTreatment(animalid, treatment);

        return new ResponseEntity<>(newTreatment, HttpStatus.OK);
    }

    @CrossOrigin
    @PutMapping("user/{userid}/treatment")
    public ResponseEntity<Treatment> updateTreatment(@PathVariable int userid, @RequestBody Treatment treatment){
    	Treatment updatedTreatment = service.updateTreatment(userid, treatment);
    	
    	return new ResponseEntity<>(updatedTreatment, HttpStatus.OK);
    }
}
