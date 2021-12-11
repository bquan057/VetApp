package com.vetapp.application.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    // instance of user database
    // query db for uname and password
    // if we get valid user
    // create the TokenManager

    @Autowired
    UserRepository repository;

    TokenManager tokenManager;

    public UserService(){
        tokenManager = new TokenManager();
    }

    // method to validate user by creating TokenManager
    public String validateUser(String uname, String pword){
        // query db
        User user = repository.findByusername(uname);
        // credientials dont match in db
        if(!user.getUsername().equals(uname) || !user.getPassword().equals(pword)){
            return null;
        }
        // create jwt from uname and pword
        // respond with jwt
        return tokenManager.createToken(user.getUserid(), user.getUsername(), user.getPassword(), user.getRole());
    }

    public User getUserFromDB(User user){
        User userFromDB = repository.findById(user.getUserid()).get();
        return userFromDB;
    }

    public User setUserFromDB(User userFromDB, User user){
        // set all attributes -> this is a problem when we have many attributes
        if(user.getFname() != null){
            userFromDB.setFname(user.getFname());
        }
        if(user.getLname() != null){
            userFromDB.setLname(user.getLname());
        }
        if(user.getUsername() != null){
            userFromDB.setUsername(user.getUsername());
        }
        if(user.getRole() != null){
            userFromDB.setRole(user.getRole());
        }
        repository.save(userFromDB);
        return userFromDB;
    }

    public User getUserById(int id){
        User userFromDB = repository.findById(id).get();
        return userFromDB;
    }

//    public void setUserById(int id){
//        User userFromDB = repository.findById(id).get();
//        return userFromDB;
//    }

    public boolean checkIdExists(int id){
        if(repository.existsById(id)){
            return true;
        }
        else{
            return false;
        }
    }

    public String deleteUser(boolean userAnswer, int id){
        if(repository.existsById(id)){
            User userToDelete = repository.getById(id);
            repository.delete(userToDelete);
            return "User has been deleted";
        }
        return "Cannot delete user";
    }

    public boolean checkIsActive(User userFromDB){
        if(userFromDB.getIsactive() == true) {
            return true;
        }
        else{
            return false;
        }
    }

    public String setIsActive(boolean statusActive, User userFromDB){
        if(statusActive == true){
            userFromDB.setIsactive(false);
            repository.save(userFromDB);
            return "User has been blocked";
        }
        return "User cannot be blocked";
    }

    public List<User> getAllUsers(){
        return repository.findAll();
    }

    public User saveUser(User newUser){
        repository.save(newUser);
        return newUser;
    }

    //gets all users with the name
    public List<User> getByName(String name){
        List<User> nameFound = repository.findByfnameContaining(name);
        nameFound.addAll(repository.findBylnameContaining(name));

        return nameFound;
    }

    public String setPassword(User userFromDB, User user){
        try{
            userFromDB.setPassword(user.getPassword());
            repository.save(userFromDB);
            return "Password has been changed successful";
        }catch(Exception e){
            return "Password change is unsucessful";
        }



//        if(userFromDB.getPassword().equals(password)){
//            userFromDB.setPassword(userFromDB.getPassword());
//            repository.save(userFromDB);
//            return "Password has been changed successful";
//        }
//        return "Password change is unsuccessful";
    }

    public boolean checkValidPassword(String password, User userFromDB){
        if(userFromDB.getPassword().equals(password)){
            return true;
        }
        return false;
    }
}
