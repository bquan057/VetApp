package com.vetapp.application.user;

<<<<<<< HEAD
//import lombok.Builder;
=======
import lombok.Getter;
import lombok.Setter;
>>>>>>> users
import lombok.Value;
import javax.persistence.*;


<<<<<<< HEAD
@Value
//@Builder
=======
>>>>>>> users
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
    @Id @GeneratedValue()@Getter
    private long userid;
    @Setter@Getter
    private String username;
    @Setter@Getter
    private String usertype;
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
