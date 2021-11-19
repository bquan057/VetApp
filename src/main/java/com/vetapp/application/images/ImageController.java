package com.vetapp.application.images;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/*
    Controller the manage interactions between the View and Model
 */
@RestController
public class ImageController {

    @Autowired
    ImageRepository repository;

    @GetMapping("api/animals/{animalid}/images")
    public ResponseEntity<List<Image>> getAllImages(@PathVariable String animalid){
        List<Image> images = repository.findAllByAnimalidContaining(animalid);
        return new ResponseEntity<>(images, HttpStatus.OK);
    }


}
