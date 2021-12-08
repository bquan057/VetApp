package com.vetapp.application.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    /*
        Method to add a new user
     */
    @PostMapping("/user")
    public ResponseEntity<User> addNewUser(@RequestBody User newUser){
        User user = repository.save(newUser);

        return new ResponseEntity<User>(user, HttpStatus.CREATED);
    }

    /*
        Method to update a user
     */
    @PutMapping ("/user")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        User userFromDB = repository.findById(user.getUserid()).get();

        // set all attributes -> this is a problem when we have many attributes
        userFromDB.setUsername(user.getUsername());
        userFromDB.setRole(user.getRole());
        userFromDB.setEmail(user.getEmail());

        repository.save(userFromDB);
        return new ResponseEntity<>(userFromDB, HttpStatus.ACCEPTED);
    }

    /*
        Method to delete a user
     */
    @DeleteMapping("/user/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id){

        if(repository.existsById(id)){
            User userToDelete = repository.getById(id);
            repository.delete(userToDelete);
            return new ResponseEntity<String>("User Deleted", HttpStatus.OK);
        }


        return new ResponseEntity<String>("User not found", HttpStatus.OK);
    }
}
