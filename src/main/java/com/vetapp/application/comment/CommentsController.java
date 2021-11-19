package com.vetapp.application.comment;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
public class CommentsController {
    private final CommentRepository repository;

    CommentsController(CommentRepository repository){
        this.repository = repository;
    }

    @GetMapping("/api/animals/{animalid}/comment")
    public ResponseEntity<List<Comment>> all(@PathVariable String animalid) {
        return new ResponseEntity<>(repository.findByAnimalidContaining(animalid), HttpStatus.ACCEPTED);
    }


    @PostMapping("/api/animals/{animalid}/comment")
    public ResponseEntity<Comment> create(@PathVariable String animalid, @RequestBody Comment newComment) {
        newComment.setAnimalid(animalid);
        Comment comment = repository.save(newComment);
        return new ResponseEntity<>(comment, HttpStatus.CREATED);
    }

    @PutMapping("/api/animals/comment/{commentid}")
    public ResponseEntity<Comment> updateComment(@PathVariable(value = "commentid") Long commentid,
                                                 @RequestBody Comment comment){
        Comment comments = repository.findById(commentid).orElseThrow();
        comments.setComment(comment.getComment());
        final Comment updatedComment = repository.save(comments);
        return ResponseEntity.ok(updatedComment);
    }

    @DeleteMapping("/api/animals/comment/{commentid}")
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