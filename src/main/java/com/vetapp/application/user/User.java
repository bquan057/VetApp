package com.vetapp.application.user;

import lombok.Value;
import javax.persistence.*;


@Value
@Entity
@Table(name="Users")
public class User {

	public User() {
		this.userid = 0;
		this.username = "";
		this.usertype = "";
		this.email = "";
		this.activationdate = "";
	}
	
    @Column(name="UserID")
    @Id @GeneratedValue()
    long userid;
    String username;
    String usertype;
    String email;
    String activationdate;

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
