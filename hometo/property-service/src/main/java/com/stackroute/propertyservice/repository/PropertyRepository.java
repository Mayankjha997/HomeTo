package com.stackroute.propertyservice.repository;

import com.stackroute.propertyservice.model.Property;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepository extends MongoRepository<Property,String> {
    List<Property> findByPropertyType(String propertyType);
}
