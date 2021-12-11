package com.vetapp.application.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
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

    /*
        Makes a new comment stores it in the DB
     */
    public Comment createComment(int animalid, Comment comment) {
        // extract data from front end
        int userid = comment.getUserid();
        String theComment = comment.getComment();
        // generate time stamp
        LocalDateTime currentDate = LocalDateTime.now();

        // create the new comment
        Comment newComment = new Comment();
        newComment.setTimestamp(currentDate);
        newComment.setAnimalid(animalid);
        newComment.setUserid(userid);
        newComment.setComment(theComment);

        // add to db
        repository.save(newComment);

        return newComment;
    }
}
