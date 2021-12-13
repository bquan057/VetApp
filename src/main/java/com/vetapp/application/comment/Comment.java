package com.vetapp.application.comment;

import com.vetapp.application.user.User;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;


@Entity
@Table(name="Comment")
@NamedQuery(name= "findCommentbyanimalid",
query = "SELECT u.fname, u.lname, c.comment, c.timestamp FROM Comment c, User u WHERE c.userid = u.userid AND c.animalid = :animalid")
public class Comment {

    @Getter
    @Setter
    @Id
    @Column(name = "Timestamp")
    private LocalDateTime timestamp;
    @Getter
    @Setter
    @Column(name = "Userid")
    private int userid;
    @Getter
    @Setter
    @Column(name = "Animalid")
    private int animalid;
    @Getter
    @Setter
    @Column(name = "Comment")
    private String comment;

    @Getter@Setter
    private String fname;

    @Getter@Setter
    private String lname;

}
