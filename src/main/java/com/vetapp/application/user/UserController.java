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

        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.ACCEPTED);
    }

    /*
        Method to add a new user
     */
    @CrossOrigin
    @PostMapping("/user")
    public ResponseEntity<User> addNewUser(@RequestBody User newUser){
        User user = userService.saveUser(newUser);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    /*
        Method to update a user
     */
    @CrossOrigin
    @PutMapping (value = "/user/update", params = "id")
    public ResponseEntity<User> updateUser(@RequestBody User user, @RequestParam int id){
        //get the user using the id
        User userFromDB = userService.getUserById(id);
        //set the attributes of new user to replace userFromDB
        userFromDB = userService.setUserFromDB(userFromDB, user);
        return new ResponseEntity<>(userFromDB, HttpStatus.ACCEPTED);
    }
    /*
        Block user
    */
    @CrossOrigin
    @PutMapping(value = "/user/block", params = "id")
    public ResponseEntity<String> blockUser(@RequestBody User user, @RequestParam int id) {
        //get user from database
        User userFromDB = userService.getUserById(id);
        //check if status is active
        boolean statusActive = userService.checkIsActive(userFromDB);
        //set the status
        String userActiveStatus = userService.setIsActive(statusActive, userFromDB);
        return new ResponseEntity<>(userActiveStatus, HttpStatus.OK);
    }

    /*
        Change password
     */
    @CrossOrigin
    @PutMapping(value = "/user/password", params = "id")
    public ResponseEntity<String> changePassword(@RequestBody User user, @RequestParam int id){
        User userFromDB = userService.getUserById(id);
        String passwordStatus = userService.setPassword(userFromDB, user);
        return new ResponseEntity<>(passwordStatus, HttpStatus.OK);
    }

    /*
        Method to delete a user
     */
    @CrossOrigin
    @DeleteMapping("/user/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id){

        boolean userAnswer = userService.checkIdExists(id);
        String userStatus = userService.deleteUser(userAnswer, id);
        return new ResponseEntity<>(userStatus, HttpStatus.OK);
    }

    /*
        Method to search for a user based on type of user button clicked, returns all users containing nam enterede
     */
    @GetMapping(value= "/user/search/{name}")
    @ResponseBody
    public ResponseEntity<List<User>> searchUser(@PathVariable String name){
        List<User> users = userService.getByName(name);
        return new ResponseEntity<>(users, HttpStatus.ACCEPTED);
    }
}
