//package com.vetapp.application.student_comments;
//import org.apache.coyote.Response;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.hateoas.CollectionModel;
//import org.springframework.hateoas.EntityModel;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
////
//@RestController
//public class StudentCommentController {
//
//    @Autowired
//    StudentCommentService service;
//
//    /*
//        Method to add a new student comment
//     */
//    @CrossOrigin
//    @PostMapping("/user/student")
//    public ResponseEntity<StudentComment> addStudentComment(@RequestBody StudentComment newComment){
//        return new ResponseEntity<>(service.saveStudentComment(newComment), HttpStatus.ACCEPTED);
//    }
//
//    /*
//        Method to get a list of student comments for a specific animal
//     */
//    @CrossOrigin
//    @GetMapping("user/animal/{animalid}/student")
//    public ResponseEntity<List<StudentComment>> deleteUser(@PathVariable int animalid, @RequestParam int userid){
//        return new ResponseEntity<>(service.getComments(animalid, userid), HttpStatus.ACCEPTED);
//    }
//
//}
