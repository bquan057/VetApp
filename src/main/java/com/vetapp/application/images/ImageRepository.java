package com.vetapp.application.images;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/*
    Class to represent the interface to the database
 */
@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

    // get all images for the specified animalid
    List<Image> findAllByAnimalidContaining(String animalid);
}
