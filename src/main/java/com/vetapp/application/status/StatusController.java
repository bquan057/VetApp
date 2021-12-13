package com.vetapp.application.status;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class StatusController {
	
	@Autowired
	StatusService service;

	/*
		Mapping to get animals most recent status update
	 */
	@CrossOrigin
	@GetMapping("animal/{animalid}/status")
	ResponseEntity<Status> getFirstStatus(@PathVariable int animalid){
		Status status = service.getFirstStatus(animalid);

		return new ResponseEntity<>(status, HttpStatus.OK);
	}

	/*
		Mapping to create a new status
	 */
	@CrossOrigin
	@PostMapping("animal/{animalid}/status")
	ResponseEntity<Status> makeStatus(@PathVariable int animalid, @RequestBody Status reqStatus){

		Status status = service.createStatus(animalid, reqStatus);

		return new ResponseEntity<>(status, HttpStatus.OK);
	}

}
