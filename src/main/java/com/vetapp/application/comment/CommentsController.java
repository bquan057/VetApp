package com.vetapp.application.comment;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;


@RestController
public class CommentsController {
    @Autowired
    CommentRepository repository;

    CommentsController(CommentRepository repository){
        this.repository = repository;
    }

    @GetMapping("/api/animals/{animalid}/comment")
    public ResponseEntity<List<Comment>> all(@PathVariable String animalid) {
        return new ResponseEntity<>(repository.findByAnimalidContaining(animalid), HttpStatus.OK);
    }


    @PostMapping(path = "/api/animals/{animalid}/comment", consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Comment> create(@RequestBody Comment newComment) {
        Comment comment = repository.save(newComment);
        return new ResponseEntity<>(comment, HttpStatus.CREATED);
    }

    @PutMapping("/api/animals/{animalid}/comment/{commentid}")
    public ResponseEntity<Comment> updateComment(@PathVariable(value = "commentid") Long commentid,
      @RequestBody Comment comment){
        Comment comments = repository.findById(commentid).orElseThrow();
//        comments.setAnimalid(comment.getAnimalid());
        comments.setComment(comment.getComment());
        final Comment updatedComment = repository.save(comments);
        return ResponseEntity.ok(updatedComment);
    }

    @DeleteMapping("/api/animals/{animalid}/comment/{commentid}")
    public ResponseEntity<Comment> deletecomment(@PathVariable long commentid){
        try{
            Optional<Comment> comment = repository.findById(commentid);
            if(comment.isPresent()){
                repository.delete(comment.get());
            }
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}