package com.vetapp.application.user;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


/*
    Definitions for methods that JPA implements
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    // find the User in the DB by the userName => JPA creates the implementation
    User findByusername(String username);

    //finds the user in the database by using userId
    List<User> findByfnameContaining(String name);
    List<User> findBylnameContaining(String name);

    @Query(value = "SELECT * FROM USER WHERE fname=? AND lname=?", nativeQuery = true)
    User findByfnameAndlname(String fname, String lname);

}
