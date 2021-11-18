package com.vetapp.application.comment;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.Value;

import javax.persistence.*;


//@Builder

@Entity
@Table(name="Comment")
public class Comment {

    @Column(name = "CommentID")
    @Getter @Id @GeneratedValue()
    private long commentid;
    @Getter @Setter
    private long animalid;
    @Getter @Setter
    private String comment;


    public Comment() {
        commentid = 0;
        animalid = 0;
        comment = "";
    }

}
