package com.vetapp.application.comment;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="Comment")
public class Comment {

    @Getter @Setter
    @Id
    @Column(name="Timestamp")
    private LocalDateTime timestamp;
    @Getter @Setter
    @Column(name = "Userid")
    private int userid;
    @Getter @Setter
    @Column(name="Animalid")
    private int animalid;
    @Getter @Setter
    @Column(name="Comment")
    private String comment;
}
