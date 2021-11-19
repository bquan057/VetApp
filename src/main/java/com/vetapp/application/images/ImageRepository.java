package com.vetapp.application.images;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/*
    Class to represent the interface to the database
 */
public interface ImageRepository extends JpaRepository<Image, Long> {

    // get all images for the specified animalid
    List<Image> findAllByAnimalidContaining(String animalid);
}
