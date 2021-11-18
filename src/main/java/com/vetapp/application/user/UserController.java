package com.vetapp.application.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
public class UserController {

    @Autowired
    UserRepository repository;

//    public UserController(UserRepository repository) {
//        this.repository = repository;
//    }

//    @GetMapping("/user")
//    CollectionModel<EntityModel<User>> getAll(){
//        List<EntityModel<User>> users = repository.findAll().stream()
//                .map(user-> EntityModel.of(user,
//                        linkTo(methodOn(UserController.class).getAll()).withRel("users")))
//                .collect(Collectors.toList());
//
//        return CollectionModel.of(users, linkTo(methodOn(UserController.class).getAll()).withSelfRel());
//    }


    @GetMapping("/user")
    public List<User> all(){

        return repository.findAll();
    }

    @PostMapping("/users")
    public String post(){
        return "it worked";
    }
}
