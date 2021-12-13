package com.vetapp.application.student_comments;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentCommentRepository extends JpaRepository<StudentComment, Integer> {

}
