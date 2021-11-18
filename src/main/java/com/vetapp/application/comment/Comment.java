package com.vetapp.application.comment;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.Value;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Value
//@Builder
@Getter
@Setter
@Entity
@Table(name="Comment")
public class Comment {
    private @Id @GeneratedValue long commentid;
    private long animalid;
    private String comment;


    public Comment() {
        commentid = 0;
        animalid = 0;
        comment = "";
    }
}
