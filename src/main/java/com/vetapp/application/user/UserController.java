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
    
    @Autowired
    UserService userService;

    // create post mapping => /login username and password => send TokenManager in response
    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<String> validateUser(@RequestBody User user){

        String token = userService.validateUser(user.getUsername(), user.getPassword());

        return new ResponseEntity<>(token, HttpStatus.OK);
    }
    
    /*
    * Method to get all users in the DB
    */
    @CrossOrigin
    @GetMapping("/user")
    public ResponseEntity<List<User>> getAllUsers(){

        List<User> users = repository.findAll();
        return new ResponseEntity<List<User>>(users, HttpStatus.ACCEPTED);
    }

    /*
        Method to add a new user
     */
    @CrossOrigin
    @PostMapping("/user")
    public ResponseEntity<User> addNewUser(@RequestBody User newUser){
        User user = repository.save(newUser);

        return new ResponseEntity<User>(user, HttpStatus.CREATED);
    }

    /*
        Method to update a user
     */
    @CrossOrigin
    @PutMapping ("/user/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable int UserId){
        User userFromDB = repository.findById(user.getUserid()).get();

        // set all attributes -> this is a problem when we have many attributes
        if(userFromDB.getFname() != null){
            userFromDB.setFname(userFromDB.getFname());
        }
        if(userFromDB.getLname() != null){
            userFromDB.setLname(userFromDB.getLname());
        }
        if(userFromDB.getUsername() != null){
            userFromDB.setUsername(userFromDB.getUsername());
        }
        if(userFromDB.getRole() != null){
            userFromDB.setRole(userFromDB.getRole());
        }
        repository.save(userFromDB);
        return new ResponseEntity<>(userFromDB, HttpStatus.ACCEPTED);
    }

    /*
        Method to delete a user
     */
    @CrossOrigin
    @DeleteMapping("/user/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id){

        if(repository.existsById(id)){
            User userToDelete = repository.getById(id);
            repository.delete(userToDelete);
            return new ResponseEntity<>("User Deleted", HttpStatus.OK);
        }
        return new ResponseEntity<>("User not found", HttpStatus.OK);
    }

    /*
        Method to search for a user based on type of user button clicked, returns all users with that name
     */
    @GetMapping("/user/{id}")
    @ResponseBody
    public ResponseEntity<List<User>> searchUser(@RequestParam String name){
        List<User> users = repository.findByfname(name);
        return new ResponseEntity<>(users, HttpStatus.ACCEPTED);
    }

    /*
        Block user
     */
//    @CrossOrigin
//    @PutMapping("/user/{id}")
//    public ResponseEntity<String> blockUser(@RequestBody User user, @RequestParam boolean isActive) {
//
//        User userFromDB = repository.findById(user.getUserid()).get();
//        if(userFromDB.getIsactive() == true) {
//            userFromDB.setIsactive(false);
//            return new ResponseEntity<>("User blocked with status", HttpStatus.OK);
//        }
//        return new ResponseEntity<>("User cannot be blocked", HttpStatus.OK);
//    }

    /*
        Change password
     */
//    @CrossOrigin
//    @PutMapping("/user/{id}")
//    public ResponseEntity<String> checkPassword(@RequestBody User user, @RequestParam String password){
//        User userFromDB = repository.findById(user.getUserid()).get();
//        if(userFromDB.getPassword().equals(password)){
//            userFromDB.setPassword(userFromDB.getPassword());
//            return new ResponseEntity<>("Password changed", HttpStatus.OK);
//        }
//        return new ResponseEntity<>("Passwords don't match", HttpStatus.OK);
//    }
}
