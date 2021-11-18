package com.vetapp.application.user;

import lombok.Builder;
import lombok.Value;
import javax.persistence.*;


@Value
@Builder
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
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    int userid;
    String username;
//    String password;
    String usertype;
//    String name;
    String email;
    String activationdate;
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
