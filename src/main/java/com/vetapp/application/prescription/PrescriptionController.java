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
}