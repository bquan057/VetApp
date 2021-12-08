package com.vetapp.application.user;



import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table(name="Users")
public class User {

	public User() {
		this.userid = 0;
		this.username = "";
		this.role = "";
		this.password = "";
		this.email = "";
		this.activationdate = "";
	}
	
    @Column(name="UserID")
    @Id @GeneratedValue()@Getter
    private int userid;
    
    @Column(name="username")
    @Setter@Getter
    private String username;
    
    @Column(name="password")
    @Setter@Getter
    String password;
    
    @Column(name="role")
    @Setter@Getter
    private String role;
    
    @Setter@Getter
    private String email;
    @Getter@Setter
    private String activationdate;

//    String password;
//    String name;
//    String firstName;
//    String lastName;
//    String phoneNumber;
//    String number;
//    String street;
//    String streetType;
//    String city;
//    String province;
//    String postalCode;
}
