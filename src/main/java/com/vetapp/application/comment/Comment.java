package com.vetapp.application.comment;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="Comment")
public class Comment {

    @Column(name = "CommentID")
    @Getter @Id @GeneratedValue()
    private long commentid;
    @Getter @Setter
    private String animalid;
    @Getter @Setter
    private String comment;


    public Comment() {
        commentid = 0;
        animalid = "";
        comment = "";
    }

}
