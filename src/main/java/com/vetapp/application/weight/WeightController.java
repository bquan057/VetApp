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
	public ResponseEntity<List<Weight>> getAnimalStatus(@PathVariable String animalid) {
		return new ResponseEntity<>(weightRepository.findByAnimalidContaining(animalid), HttpStatus.ACCEPTED);
	}
}
