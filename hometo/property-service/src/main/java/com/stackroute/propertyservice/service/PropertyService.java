package com.stackroute.propertyservice.service;

import com.stackroute.propertyservice.exception.AlreadyExistException;
import com.stackroute.propertyservice.exception.PropertyNotFoundException;
import com.stackroute.propertyservice.model.Property;
import com.stackroute.propertyservice.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyService implements PropertyServiceInterface{
    @Autowired
    private PropertyRepository propRepo;

    @Override
    public Property addProperty(Property p) throws AlreadyExistException {
        Optional<Property> property=propRepo.findById(p.getPropertyID());
        if(property.isPresent()){
            throw new AlreadyExistException();
        }
        return propRepo.save(p);
    }

    @Override
    public List<Property> getAllProperty() {
        return propRepo.findAll();
    }

    @Override
    public Property getPropertyById(String propertyID) throws PropertyNotFoundException {
        Optional<Property> propertyExists=propRepo.findById(propertyID);
        if(propertyExists.isEmpty())
        {
            throw new PropertyNotFoundException();
        }
        return propertyExists.get();
    }

    @Override
    public boolean deleteProperty(String propertyID) throws PropertyNotFoundException {
        boolean flag=false;
        Optional<Property> propertyExists=propRepo.findById(propertyID);
        if(propertyExists.isEmpty()){
            throw new PropertyNotFoundException();
        }
        else{
            flag = true;
            propRepo.deleteById(propertyID);
        }
        return flag;
    }

    @Override
    public Property updateProperty(Property p, String propertyID) throws PropertyNotFoundException {
        Optional<Property> propertyExist=propRepo.findById(propertyID);

        if(propertyExist.isEmpty()){
            throw new PropertyNotFoundException();
        }

        Property property=propertyExist.get();

        property.setPropertyID(p.getPropertyID());
        property.setPropertyName(p.getPropertyName());
        property.setPropertyType(p.getPropertyType());
        property.setAddress(p.getAddress());
        property.setDescription(p.getDescription());
        property.setAmenities(p.getAmenities());
        property.setPrice(p.getPrice());

        return propRepo.save(property);
    }

    @Override
    public List<Property> getPropertiesByType(String propertyType) {
        return propRepo.findByPropertyType(propertyType);
    }
}
