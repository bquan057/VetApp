package com.vetapp.application.student_comments;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//
@RestController
public class StudentCommentController {

    @Autowired
    StudentCommentService service;

    /*
        Method to add a new student comment
     */
    @CrossOrigin
    @PostMapping("/animal/{animalid}/studentcomment")
    public ResponseEntity<StudentComment> addStudentComment(@PathVariable int animalid, @RequestBody StudentComment comment){

        StudentComment newComment = service.saveStudentComment(animalid, comment);

        return new ResponseEntity<>(newComment, HttpStatus.ACCEPTED);
    }

    /*
        Method to get a list of student comments for a specific animal
     */
    @CrossOrigin
    @GetMapping("animal/{animalid}/studentcomment")
    public ResponseEntity<List<StudentComment>> deleteUser(@PathVariable int animalid){

        List<StudentComment> comments = service.getComments(animalid);

        return new ResponseEntity<>(comments, HttpStatus.ACCEPTED);
    }

}
