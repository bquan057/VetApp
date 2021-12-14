package com.vetapp.application.request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RequestController {

    @Autowired
    RequestRepository repository;

    @Autowired
    RequestService service;

    /*
        mapping to get request by status or by teacher id
        requested  or teacher id  is in http request param
     */
    @CrossOrigin
    @GetMapping("request/search")
    public ResponseEntity<List<Request>> getRequests(@RequestParam(required = false) Integer teachingid, @RequestParam(required = false) String bookingstatus) {

    	List<Request> requests = null;
    	
    	if (teachingid != null) {
    		requests = service.findByTeachingid(teachingid);
    	}
    	else if (bookingstatus != null) {
    		requests = service.findByBookingstatus(bookingstatus);
    	}
        return new ResponseEntity<>(requests, HttpStatus.ACCEPTED);
        
    }

    /*
        mapping to update request status
     */
    @CrossOrigin
    @PutMapping("request")
    public ResponseEntity<Request> updateRequestStatus(@RequestBody Request request){

        Request requestFromDB = service.updateRequestStatus(request);

        return new ResponseEntity<>(requestFromDB, HttpStatus.ACCEPTED);
    }

    @CrossOrigin
    @PostMapping("request")
    public ResponseEntity<Request> addRequest(@RequestBody Request newRequest){

        Request request = service.addRequest(newRequest);
        return new ResponseEntity<>(request, HttpStatus.ACCEPTED);
    }

}
