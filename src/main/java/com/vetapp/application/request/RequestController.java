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
        Mapping to get requests by teahcer id
        teach id is extracted from url
     */
    @CrossOrigin
    @GetMapping("request/{teachId}")
    public ResponseEntity<List<Request>> getRequestByTeacherId(@PathVariable int teachId){
        List<Request> requests = repository.findByteacherid(teachId);

        return new ResponseEntity<>(requests, HttpStatus.ACCEPTED);
    }

    /*
        mapping to get request by status
        requested status is in http request body
     */
    @CrossOrigin
    @GetMapping("requests/{status}")
    public ResponseEntity<List<Request>> getRequestByStatus(@PathVariable String status){

        List<Request> requests = service.getRequestbyStatus(status);

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
