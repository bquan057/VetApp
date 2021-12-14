package com.vetapp.application.images;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/*
    Controller the manage interactions between the View and Model
 */
@RestController
public class ImageController {

    @Autowired
    ImageService service;

    // Mapping to get images for specified animal
    @CrossOrigin
    @GetMapping("animals/{animalid}/images")
    public ResponseEntity<List<Image>> getAllImages(@PathVariable int animalid){
        List<Image> images = service.getImagesByAnimalId(animalid);
        return new ResponseEntity<>(images, HttpStatus.ACCEPTED);
    }

    // Mapping to add images for a specified animal
    @CrossOrigin
    @PostMapping("animals/images")
    public ResponseEntity<Image> addImage(@RequestBody Image newImage){
        Image image = service.setImage(newImage);
        return new ResponseEntity<>(image, HttpStatus.ACCEPTED);
    }

//    // Mapping to delete image
//    @DeleteMapping("animals/images/{imageid}")
//    public ResponseEntity<String> deleteImage(@PathVariable long imageid){
//        Optional<Image> image = repository.findById(imageid);
//
//        // image exists
//        if(image.isPresent()){
//            repository.delete(image.get());
//            return new ResponseEntity<>("Image deleted", HttpStatus.OK);
//        }
//
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
}
