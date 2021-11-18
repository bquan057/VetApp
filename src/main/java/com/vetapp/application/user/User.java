package com.vetapp.application.user;

import lombok.Builder;
import lombok.Value;
import javax.persistence.*;


@Value
@Builder
@Entity
@Table(name="Users")
public class User {

    @Column(name="UserID")
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    int userId;
    String userName;
//    String password;
    String type;
//    String name;
    String email;
    String activationDate;
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
