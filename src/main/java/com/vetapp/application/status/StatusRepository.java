package com.vetapp.application.status;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vetapp.application.comment.Comment;

@Repository
public interface StatusRepository extends JpaRepository<Comment, Long>{
    List<Comment> findByAnimalidContaining(String animalid);
}
