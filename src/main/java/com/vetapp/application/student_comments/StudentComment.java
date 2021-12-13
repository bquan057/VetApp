package com.vetapp.application.student_comments;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Temporal;
import java.time.LocalDateTime;
import java.util.Date;

public class StudentComment {

    @Id
    @Setter @Getter
    @Column(name = "Timestamp")
    @Temporal(javax.persistence.TemporalType.TIMESTAMP)
    private Date timestamp = new Date();

    @Setter @Getter
    @Column(name = "Userid")
    private int userid;

    @Setter @Getter
    @Column(name = "Animalid")
    private int animalid;

    @Setter @Getter
    @Column(name = "Comment")
    private String comment;
}
