package com.vetapp.application.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
