package com.vetapp.application.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService {

    @Autowired
    CommentRepository repository;

    @PersistenceContext
    public EntityManager em;

    /*
        Gets all comments from the database for the specified animalid
     */
    public List<Comment> getAllComments(int animalid) {

        // execute the named query
        List<Object[]> results = em.createNamedQuery("findCommentbyanimalid")
                .setParameter("animalid", animalid).getResultList();

        List<Comment> comments = new ArrayList<>();

        // iterate through results and map to Comment object
        for(Object[] result:results){
            Comment comment = new Comment();
            String fname = (String)result[0];
            String lname = (String)result[1];
            String theComment = (String) result[2];
            LocalDateTime time = (LocalDateTime)result[3];

            comment.setFname(fname);
            comment.setLname(lname);
            comment.setComment(theComment);
            comment.setTimestamp(time);
            comments.add(comment);
        }

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
