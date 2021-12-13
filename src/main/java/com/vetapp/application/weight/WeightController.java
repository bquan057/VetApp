package com.vetapp.application.weight;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class WeightController {

	@Autowired
	WeightService service;

	@CrossOrigin
	@GetMapping("animal/{animalid}/weight")
	public ResponseEntity<List<Weight>> getAnimalWeight(@PathVariable int animalid) {

		List<Weight> weights = service.getWeights(animalid);

		return new ResponseEntity<>(weights, HttpStatus.ACCEPTED);
	}

	@CrossOrigin
	@PostMapping("animal/{animalid}/weight")
	public ResponseEntity<Weight> addAnimalWeight(@PathVariable int animalid, @RequestBody Weight newWeight) {

		Weight weight = service.addWeight(newWeight, animalid);

		return new ResponseEntity<>(weight, HttpStatus.ACCEPTED);
	}
}
