package com.vetapp.application.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;


@Repository
public interface CommentRepository extends JpaRepository<Comment, Timestamp>{

    /**
     * JPA query for find comment by animalid
     * @param animalid
     * @return List of all comments for specified animalid
     */
    List<Comment> findByAnimalid(int animalid);
}
