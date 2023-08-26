package com.stackroute.propertyservice.service;

import com.stackroute.propertyservice.exception.AlreadyExistException;
import com.stackroute.propertyservice.exception.PropertyNotFoundException;
import com.stackroute.propertyservice.model.Property;

import java.util.List;

public interface PropertyServiceInterface {
    public Property addProperty(Property p) throws AlreadyExistException;
    public Property getPropertyById(String propertyID) throws PropertyNotFoundException;
    public List<Property> getAllProperty();
    public boolean deleteProperty(String propertyID) throws PropertyNotFoundException;
    public Property updateProperty(Property p, String propertyID) throws PropertyNotFoundException;

    public List<Property> getPropertiesByType(String propertyType);
}
