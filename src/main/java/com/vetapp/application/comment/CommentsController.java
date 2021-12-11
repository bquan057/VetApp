package com.vetapp.application.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
public class CommentsController {

    @Autowired
    CommentService service;

    /*
        Get all comments from the DB with the searching on animals id
     */
    @GetMapping("animal/{animalid}/comment")
    public ResponseEntity<List<Comment>> getCommentByAnimalId(@PathVariable int animalid) {

        List<Comment> comments = service.getAllComments(animalid);

        return new ResponseEntity<>(comments, HttpStatus.ACCEPTED);
    }


    @PostMapping("animal/{animalid}/comment")
    public ResponseEntity<Comment> newComment(@PathVariable int animalid, @RequestBody Comment comment){

        Comment newComment = service.createComment(animalid, comment);
        return new ResponseEntity<>(newComment, HttpStatus.OK);
    }



}