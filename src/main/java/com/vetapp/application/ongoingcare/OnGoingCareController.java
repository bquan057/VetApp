package com.vetapp.application.ongoingcare;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OnGoingCareController {

    @Autowired
    OnGoingCareService service;

    @GetMapping("care")
    public ResponseEntity<List<OnGoingCare>> getCare(){
        List<OnGoingCare> care = service.getAllCare();

        return new ResponseEntity<>(care, HttpStatus.OK);
    }
}
