package com.vetapp.application.user;

//import app.errors.UserNotFoundException;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;

//    // creating a new user
//    public String create(NewUser newUser){return userRepository.create(newUser);}
//
//    // get all users
//    public List<User> getUsers(){return userRepository.getUsers();}
//
//    // get a specific user
//    public User getUserById(String id) throws UserNotFoundException {return userRepository.getUserById(id);}
//
//    // delete a specific user
//    public void deleteUser (String id) throws UserNotFoundException{
//        // user must exist
//        Objects.requireNonNull(id,"User id is required");
//        userRepository.deleteUser(id);
//    }
//
//    // update an existing user
//    public User updateUser(User user) throws UserNotFoundException{
//        // user must exist
//        Objects.requireNonNull(user.getUserId(),"User id is required for update");
//        return userRepository.updateUser(user);
//    }

}
