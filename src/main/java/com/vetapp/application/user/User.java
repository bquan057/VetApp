package com.vetapp.application.user;



import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


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
    
    @Column(name="ActivationDate")
    @Getter @Setter
    private String activationdate;

    @Column(name="IsActive")
    @Getter @Setter
    private Boolean isactive;
    
    @Column(name="Role")
    @Getter @Setter
    private String role;




//	public int getUserid() {
//		return userid;
//	}
//
//	public void setUserid(int userid) {
//		this.userid = userid;
//	}

//	public String getUsername() {
//		return username;
//	}
//
//	public void setUsername(String username) {
//		this.username = username;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	public String getRole() {
//		return role;
//	}
//
//	public void setRole(String role) {
//		this.role = role;
//	}
//
//	public String getFname() {
//		return fname;
//	}
//
//	public void setFname(String fname) {
//		this.fname = fname;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public String getActivationdate() {
//		return activationdate;
//	}
//
//	public void setActivationdate(String activationdate) {
//		this.activationdate = activationdate;
//	}

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
