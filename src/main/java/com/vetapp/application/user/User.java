package com.vetapp.application.user;



import com.vetapp.application.comment.Comment;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;



@Entity
@Table(name="User")
public class User {
	
    @Column(name="UserID")
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Getter @Setter
    private int userid;
    
    @Column(name="Username")
//    @Getter @Setter
    private String username;
    
    @Column(name="Password")
//    @Getter @Setter
    String password;
    
    @Column(name="Email")
//    @Getter @Setter
    private String email;
    

    @Column(name="FName")
//    @Getter @Setter
    @Getter @Setter

    private String fname;

    @Column(name="LName")
//    @Getter @Setter
    private String lname;

    @Column(name="Activationdate", updatable = false)
//    @CreationTimestamp
    @Temporal(javax.persistence.TemporalType.TIMESTAMP)
//    @Getter @Setter
    private Date activationdate = new Date();

    @Column(name="Isactive")
//    @Getter @Setter
    private boolean isactive;

    
    @Column(name="Role")
//    @Getter @Setter
    private String role;

    public boolean getIsactive() {
        return isactive;
    }

    public void setIsactive(boolean isactive) {
        this.isactive = isactive;
    }


	public int getUserid() {
		return userid;
	}
//
	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getUsername() {
		return username;
	}
//
	public void setUsername(String username) {
		this.username = username;
	}
//
	public String getPassword() {
		return password;
	}
//
	public void setPassword(String password) {
		this.password = password;
	}
//
	public String getRole() {
		return role;
	}
//
	public void setRole(String role) {
		this.role = role;
	}
//
	public String getFname() {
		return fname;
	}
//
	public void setFname(String fname) {
		this.fname = fname;
	}

    public String getLname() {
        return lname;
    }
    //
    public void setLname(String lname) {
        this.lname = lname;
    }
//
	public String getEmail() {
		return email;
	}
//
	public void setEmail(String email) {
		this.email = email;
	}
//
	public Date getActivationdate() {
		return activationdate;
	}
//
	public void setActivationdate(Date activationdate) {
		this.activationdate = activationdate;
	}

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
