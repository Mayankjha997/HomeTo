package com.stackroute.authenticationservice.Controller;

import org.springframework.web.bind.annotation.*;

import com.stackroute.authenticationservice.Model.User;
import com.stackroute.authenticationservice.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/HomeTo")
public class UserController {
    @Autowired
    private UserService userv;

    @PostMapping("/register")
    @CrossOrigin(origins = "*")
    public ResponseEntity<?> addUser(@RequestBody User u)
    {
        User u1=userv.saveUSer(u);
        return new ResponseEntity<>(u1,HttpStatus.CREATED);
    }


    @PostMapping("/login")
    @CrossOrigin(origins = "*")
    public ResponseEntity<?> Login(@RequestBody User user){
        Map<String,String> map=userv.login(user);

        String email = map.get("email");
        Map<String, Object> response = new HashMap<>();
        response.put("token", map.get("token"));
        response.put("email", email);

        return new ResponseEntity<>(response,HttpStatus.OK);

    }
    @GetMapping("/login")
    @CrossOrigin(origins = "*")
    public ResponseEntity<?> getAllUser()
    {
        List<User> users=userv.getAllUsers();
        return new ResponseEntity<List<User>>(users,HttpStatus.OK);
    }

    @GetMapping("/getUserByEmail/{email}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
        User user = userv.userByEmail(email);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PutMapping("/updateUser")
    @CrossOrigin(origins = "*")
    public ResponseEntity<?> updateUser(@RequestBody User u) {
        return new ResponseEntity<>(userv.updateUser(u),HttpStatus.OK);
    }

}
