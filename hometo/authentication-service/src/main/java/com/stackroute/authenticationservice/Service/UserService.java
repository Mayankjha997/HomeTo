package com.stackroute.authenticationservice.Service;

import com.stackroute.authenticationservice.Model.User;
import com.stackroute.authenticationservice.Model.UserRole;
import com.stackroute.authenticationservice.Repository.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository urepo;

    public User saveUSer(User u)
    {

        return urepo.save(u);
    }
    public Map<String, String> login(User u) {
        // TODO Auto-generated method stub
        Map<String,String> token=new HashMap<String,String>();
        User uu=urepo.findByEmailAndPassword(u.getEmail(), u.getPassword());
        if(uu!=null)
        {
            token=getJWTToken(u);
        }
        return token;
    }
    public List<User> getAllUsers() {
        // TODO Auto-generated method stub
        System.out.println("Hello all");
        List<User> userL=urepo.findAll();
        userL.forEach(u->System.out.println(u));
        return userL;
    }

    public User userByEmail(String email) {
        User user = urepo.findByEmail(email);
        return user;
    }

    public Map<String,String> getJWTToken(User u)
    {
        String tok= Jwts.builder().setSubject(u.getEmail()).claim("email",u.getEmail()).setIssuedAt(new Date(0)).signWith(SignatureAlgorithm.HS256,"secretkey").compact();
        Map<String,String> tokMap=new HashMap<String,String>();
        tokMap.put("token", tok);
        tokMap.put("email", u.getEmail());
        return tokMap;
    }

    public User updateUser(User u){
        Optional<User> userExist=urepo.findById(u.getUserId());

        User user = userExist.get();
        
        user.setEmail(u.getEmail());
        user.setPassword(u.getPassword());
        user.setConfirmPassword(u.getConfirmPassword());
        user.setRole(u.getRole());
        user.setPhoneNumber(u.getPhoneNumber());
        user.setName(u.getName());

        return urepo.save(user);
    }
        
}
