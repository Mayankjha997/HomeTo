package com.stackroute.propertyservice.controller;

import com.stackroute.propertyservice.exception.AlreadyExistException;
import com.stackroute.propertyservice.exception.PropertyNotFoundException;
import com.stackroute.propertyservice.model.Property;
import com.stackroute.propertyservice.repository.PropertyRepository;
import com.stackroute.propertyservice.service.PropertyService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class PropertyController {
    @Autowired
    private PropertyService propServ;

    // @Autowired
    // private PropertyRepository pr;

    // @PostMapping("/uploadImage")
    // public ResponseEntity<?> uploadImage(@RequestBody MultipartFile file) throws IOException {
    //     Property p=new Property();
    //     p.setImage(file.getBytes());
    //     pr.save(p);
    //     return new ResponseEntity<>(p,HttpStatus.OK);
    // }

    //  @PostMapping(value = "/addProperty/", consumes=MediaType.MULTIPART_FORM_DATA_VALUE)
    // public ResponseEntity<?> addProperty(@RequestBody Property p) throws AlreadyExistException {
    //     pr.save(p);
    //     return new ResponseEntity<>(p,HttpStatus.CREATED);
    // }


    @PostMapping("/addProperty")
    public ResponseEntity<?> addProperty(@RequestBody Property p) throws AlreadyExistException {
        Property property;

        try{
            property=propServ.addProperty(p);
        }
        catch (AlreadyExistException e1)
        {
            throw new AlreadyExistException();
        }
        catch(Exception e2)
        {
            return new ResponseEntity<>(e2.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(property,HttpStatus.CREATED);
    }

    @GetMapping("/getProperties")
    public ResponseEntity<?> getProperties()
    {
        List<Property> properties=propServ.getAllProperty();
        return new ResponseEntity<>(properties,HttpStatus.OK);
    }

    @GetMapping("/getPropertyById/{propertyID}")
    public ResponseEntity<?> getPropertyById(@PathVariable String propertyID) throws PropertyNotFoundException {
        Property property;
        try{
            property=propServ.getPropertyById(propertyID);
        }
        catch(PropertyNotFoundException e1)
        {
            throw new PropertyNotFoundException();
        }
        catch(Exception e2)
        {
            return new ResponseEntity<>(e2.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(property,HttpStatus.OK);
    }

    @DeleteMapping("/deleteProperty/{propertyID}")
    public ResponseEntity<?> deleteProperty(@PathVariable String propertyID) throws PropertyNotFoundException {
        boolean flag;
        try
        {
            flag=propServ.deleteProperty(propertyID);
        }
        catch(PropertyNotFoundException e1)
        {
            throw new PropertyNotFoundException();
        }
        catch(Exception e2)
        {
            return new ResponseEntity<>(e2.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>("Deleted Successfully",HttpStatus.OK);
    }

    @PutMapping("/updateProperty/{propertyID}")
    public ResponseEntity<?> updateProperty(@RequestBody Property p,@PathVariable String propertyID) throws PropertyNotFoundException
    {
        Property property;
        try{
            property=propServ.updateProperty(p,propertyID);
        }
        catch (PropertyNotFoundException e1)
        {
            throw new PropertyNotFoundException();
        }
        catch (Exception e2)
        {
            return new ResponseEntity<>(e2.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(property,HttpStatus.OK);
    }

    @GetMapping("/getPropertiesByType/{propertyType}")
    public ResponseEntity<?> getPropertiesByType(@PathVariable String propertyType) {
        List<Property> properties=propServ.getPropertiesByType(propertyType);
        return new ResponseEntity<>(properties, HttpStatus.OK);
    }
}
