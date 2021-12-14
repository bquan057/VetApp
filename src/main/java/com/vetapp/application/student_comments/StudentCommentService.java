//package com.vetapp.application.student_comments;
//import com.vetapp.application.animals.Animal;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class StudentCommentService {
//
//    @Autowired
//    StudentCommentRepository repository;
//
//    public StudentComment saveStudentComment(StudentComment comment){
//        repository.save(comment);
//        return comment;
//    }
//
//    public List<StudentComment> getComments(int animalid, int userid){
//        List<StudentComment> commentsFromDB = repository.findAll();
//
//        for(int i = 0; i<commentsFromDB.size(); i++){
//            if(commentsFromDB.get(i).getUserid() != userid){
//                commentsFromDB.remove(i);
//            }
//        }
//
//        for(int i = 0; i<commentsFromDB.size(); i++){
//            if(commentsFromDB.get(i).getAnimalid() != animalid){
//                commentsFromDB.remove(i);
//            }
//        }
//
//        return commentsFromDB;
//    }
//
//}
