package com.vetapp.application.user;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/*
    Definitions for methods that JPA implements
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    // find the User in the DB by the userName => JPA creates the implementation
    User findByusername(String username);
}
