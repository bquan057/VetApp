package com.vetapp.application.student_comments;
import com.vetapp.application.animals.Animal;
import com.vetapp.application.comment.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class StudentCommentService {

    @Autowired
    StudentCommentRepository repository;

    @PersistenceContext
    EntityManager entityManager;

    public StudentComment saveStudentComment(int animalid, StudentComment comment){

        int userid = comment.getUserid();
        String theComment = comment.getComment();

        LocalDateTime current = LocalDateTime.now();

        StudentComment newComment = new StudentComment();
        newComment.setTimestamp(current);
        newComment.setAnimalid(animalid);
        newComment.setUserid(userid);
        newComment.setComment(theComment);

        repository.save(newComment);
        return newComment;
    }

    public List<StudentComment> getComments(int animalid){
        // execute the named query
        List<Object[]> results = entityManager.createNamedQuery("findStudentCommentbyanimalid")
                .setParameter("animalid", animalid).getResultList();

        List<StudentComment> comments = new ArrayList<>();

        // iterate through results and map to Comment object
        for(Object[] result:results){
            StudentComment comment = new StudentComment();
            String fname = (String)result[0];
            String lname = (String)result[1];
            String theComment = (String) result[2];
            LocalDateTime time = (LocalDateTime)result[3];

            comment.setFname(fname);
            comment.setLname(lname);
            comment.setComment(theComment);
            comment.setTimestamp(time);
            comment.setAnimalid(animalid);
            comments.add(comment);
        }

        return comments;
    }

}
