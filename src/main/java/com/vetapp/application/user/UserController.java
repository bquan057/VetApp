package com.vetapp.application.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
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


    @GetMapping("/user")
    public CollectionModel<EntityModel<User>> getAllUsers(){

        List<EntityModel<User>> users = repository.findAll().stream()
                .map(user -> EntityModel.of(user)).collect(Collectors.toList());

        return CollectionModel.of(users);

    }

    @PostMapping("/user")
    public User post(@RequestBody User newUser){

        return repository.save(newUser);
    }
}
