package com.vetapp.application.prescription;

import com.vetapp.application.comment.Comment;
import com.vetapp.application.comment.CommentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;



@RestController
public class PrescriptionController {
    @Autowired
    PrescriptionRepository repository;

    PrescriptionController(PrescriptionRepository repository){
        this.repository = repository;
    }

    @GetMapping("/api/animals/{animalid}/prescription")
    public ResponseEntity<List<Prescription>> all(@PathVariable String animalid) {
        return new ResponseEntity<>(repository.findByAnimalidContaining(animalid), HttpStatus.OK);
    }

    @PostMapping("/api/animals/{animalid}/prescription")
    public ResponseEntity<Prescription> create(@PathVariable String animalid, @RequestBody Prescription newPrescription) {
        newPrescription.setAnimalid(animalid);
        Prescription prescription = repository.save(newPrescription);
        return new ResponseEntity<>(prescription, HttpStatus.CREATED);
    }

    @PutMapping("/api/animals/prescription/{prescriptionid}")
    public ResponseEntity<Prescription> updatePrescription(@PathVariable(value = "prescriptionid") Long prescriptionid,
                                                 @RequestBody Prescription prescription){
        Prescription prescriptions = repository.findById(prescriptionid).orElseThrow();
        prescriptions.setPrescription(prescription.getPrescription());
        final Prescription updatedPrescription = repository.save(prescriptions);
        return ResponseEntity.ok(updatedPrescription);
    }

    @DeleteMapping("/api/animals/prescription/{prescriptionid}")
    public ResponseEntity<Prescription> deletePrescription(@PathVariable long prescriptionid){
        try{
            Optional<Prescription> prescription = repository.findById(prescriptionid);
            if(prescription.isPresent()){
                repository.delete(prescription.get());
            }
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}