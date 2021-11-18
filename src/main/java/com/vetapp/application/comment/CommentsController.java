package com.vetapp.application.comment;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.List;
import java.util.stream.Collectors;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;


@RestController
public class CommentsController {
    private final CommentRepository repository;

    CommentsController(CommentRepository repository){
        this.repository = repository;
    }

    @GetMapping("/comment")
    public ResponseEntity<List<Comment>> all() {
        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }


    @PostMapping(path = "comment", consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Comment> create(@RequestBody Comment newComment) {
        Comment comment = repository.save(newComment);
        return new ResponseEntity<>(comment, HttpStatus.CREATED);
    }
}