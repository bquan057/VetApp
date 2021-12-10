package com.vetapp.application.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    @Autowired
    CommentRepository repository;

    /*
        Gets all comments from the database for the specified animalid
     */
    public List<Comment> getAllComments(int animalid) {

        List<Comment> comments = repository.findByAnimalid(animalid);
        return comments;
    }
}
