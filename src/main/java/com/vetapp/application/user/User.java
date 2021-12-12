package com.vetapp.application.user;



import com.vetapp.application.comment.Comment;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.Set;


@Entity
@Table(name="User")
public class User {
	
    @Column(name="UserID")
    @Id @GeneratedValue()
    @Getter @Setter
    private int userid;
    
    @Column(name="Username")
    @Getter @Setter
    private String username;
    
    @Column(name="Password")
    @Getter @Setter
    String password;
    
    @Column(name="Email")
    @Getter @Setter
    private String email;
    
    @Column(name="fname")
    @Getter @Setter
    private String fname;

    @Column(name="LName")
    @Getter @Setter
    private String lname;
    
    @Column(name="Activationdate")
    @Getter @Setter
    private String activationdate;

    @Column(name="Isactive")
    @Getter @Setter
    private Boolean isactive;
    
    @Column(name="Role")
    @Getter @Setter
    private String role;

}
