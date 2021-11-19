package com.vetapp.application.weight;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class WeightController {

	@Autowired
	WeightRepository weightRepository;
	
	@GetMapping("/api/animals/{animalid}/weight")
	public ResponseEntity<List<Weight>> getAnimalWeight(@PathVariable String animalid) {
		return new ResponseEntity<>(weightRepository.findByAnimalidContaining(animalid), HttpStatus.ACCEPTED);
	}
	
	@PostMapping("/api/animals/{animalid}/weight")
	public ResponseEntity<Weight> addAnimalWeight(@PathVariable String animalid, @RequestBody Weight newWeight) {
		newWeight.setAnimalid(animalid);
		Weight weight = weightRepository.save(newWeight);
		return new ResponseEntity<>(weight, HttpStatus.ACCEPTED);
	}
}
