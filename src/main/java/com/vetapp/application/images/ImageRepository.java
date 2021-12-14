package com.vetapp.application.images;

import com.vetapp.application.animals.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/*
    Class to represent the interface to the database
 */
@Repository
public interface ImageRepository extends JpaRepository<Image, Integer> {

    // get all images for the specified animalid
    List<Image> findAllByAnimalidContaining(int animalid);
//    int findByAnimalid(int animalid);


}
