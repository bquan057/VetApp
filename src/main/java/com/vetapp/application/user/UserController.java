package com.vetapp.application.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

@RestController
public class UserController {

    @Autowired
    UserRepository repository;

    /*
    * Method to get all users in the DB
    */
    @GetMapping("/user")
    public ResponseEntity<List<User>> getAllUsers(){

        List<User> users = repository.findAll();
        return new ResponseEntity<List<User>>(users, HttpStatus.ACCEPTED);
    }

    @PostMapping("/user")
    public User post(@RequestBody User newUser){

        return repository.save(newUser);
    }
}
