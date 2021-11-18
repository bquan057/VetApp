package com.vetapp.application.user;

//import app.errors.UserNotFoundException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
    Method definitions for interactions with the User Data
 */
@Repository
public interface UserRepository extends JpaRepository<User, String> {

}
