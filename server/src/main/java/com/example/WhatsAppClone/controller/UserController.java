package com.example.WhatsAppClone.controller;

import com.example.WhatsAppClone.Repository.UserRepository;
import com.example.WhatsAppClone.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins={"http://localhost:3000"})
public class UserController {

    @Autowired
    UserRepository userRepository;

    //AddUser

    @PostMapping("/addUser")
    public User addBook(@RequestBody User user){
       String email = user.getEmail();
       if(userRepository.findOne( email )){

       }

    }

    //GetUser by id
    @GetMapping("/getUser/{userId}")
    public Optional<User> getUser(@PathVariable String userId){
       long id = Long.valueOf(userId);
       return userRepository.findById(id);
    }


    //GetAllUsers
    @GetMapping("/getAllUsers")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

}
