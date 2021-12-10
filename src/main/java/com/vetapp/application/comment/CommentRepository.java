package com.vetapp.application.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;


@Repository
public interface CommentRepository extends JpaRepository<Comment, LocalDateTime>{
    List<Comment> findByAnimalid(int animalid);
}
