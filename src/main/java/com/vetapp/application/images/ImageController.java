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
    ImageRepository repository;

    // Mapping to get images for specified animal
    @GetMapping("api/animals/{animalid}/images")
    public ResponseEntity<List<Image>> getAllImages(@PathVariable String animalid){
        List<Image> images = repository.findAllByAnimalidContaining(animalid);
        return new ResponseEntity<>(images, HttpStatus.OK);
    }

    // Mapping to add images for a specified animal
    @PostMapping("/api/animals/{animalid}/images")
    public ResponseEntity<Image> addImage(@PathVariable String animalid, @RequestBody Image newImage){
        newImage.setAnimalid(animalid); // attach animal id to new image
        Image image = repository.save(newImage);
        return new ResponseEntity<>(image, HttpStatus.OK);
    }

    // Mapping to delete image
    @DeleteMapping("/api/animals/images/{imageid}")
    public ResponseEntity<String> deleteImage(@PathVariable long imageid){
        Optional<Image> image = repository.findById(imageid);

        // image exists
        if(image.isPresent()){
            repository.delete(image.get());
            return new ResponseEntity<>("Image deleted", HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
