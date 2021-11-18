package com.vetapp.application.comment;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;

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
    CollectionModel<EntityModel<Comment>> all() {
        List<EntityModel<Comment>> comments = repository.findAll().stream()
                .map(comment -> EntityModel.of(comment, linkTo(methodOn(CommentsController.class).all()).withRel("comments")))
                .collect(Collectors.toList());
        return CollectionModel.of(comments,
                linkTo(methodOn(CommentsController.class).all()).withSelfRel());
    }

}