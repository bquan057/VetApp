package com.vetapp.application.student_comments;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Student_Comment")
@NamedQuery(name= "findStudentCommentbyanimalid",
        query = "SELECT u.fname, u.lname, s.comment, s.timestamp FROM StudentComment s, User u " +
                "WHERE s.userid = u.userid AND s.animalid = :animalid")
public class StudentComment {

    @Id
    @Setter @Getter
    private LocalDateTime timestamp;

    @Setter @Getter
    @Column(name = "Userid")
    private int userid;

    @Setter @Getter
    @Column(name = "Animalid")
    private int animalid;

    @Setter @Getter
    @Column(name = "Comment")
    private String comment;

    @Getter @Setter
    private String fname;

    @Getter @Setter
    private String lname;

}
