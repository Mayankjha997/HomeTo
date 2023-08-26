package com.stackroute.propertyservice.repository;

import com.stackroute.propertyservice.model.Property;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@ExtendWith(SpringExtension.class)
@DataMongoTest
public class RepositoryTest {
    @Autowired
    private PropertyRepository propRepo;
    private Property prop;

    @BeforeEach
    void setUp()
    {
        prop=new Property("103","Sweet Home","Home","Bakers street","This is an well furnished house","Lawn, Balcony, 3BHK",1000000);
    }

    @AfterEach
    void tearDown()
    {
        propRepo.deleteAll();
        prop = null;
    }

    @Test
    @DisplayName("Test Case to add prop object")
    void addPropShouldReturnProp()
    {
        propRepo.save(prop);
        Optional<Property> prop1=propRepo.findById(prop.getPropertyID());
        assertNotNull(prop1.get());
        assertEquals(prop,prop1.get());
    }

    @Test
    @DisplayName("Test to retrieve property list")
    void checkFindAll()
    {
        propRepo.save(prop);
        Property property1=new Property("101","Test1","Test1","Test1","Test1","Test1",1000000);
        propRepo.save(property1);
        List<Property> propertyList=propRepo.findAll();
        assertEquals(2,propertyList.size());
    }

    @Test
    @DisplayName("Test case to check deletion")
    void checkDeletion()
    {
        propRepo.save(prop);
        Optional<Property> property1=propRepo.findById(prop.getPropertyID());
        propRepo.deleteById(property1.get().getPropertyID());
        assertEquals(Optional.empty(),propRepo.findById(prop.getPropertyID()));
    }

    @Test
    @DisplayName("Test case to check update")
    void checkUpdateProperty()
    {
        propRepo.save(prop);
        Optional<Property> property1=propRepo.findById(prop.getPropertyID());
        assertNotNull(property1);
        prop.setPropertyType("Vila");
        propRepo.save(prop);
        assertEquals("Vila",propRepo.findById(prop.getPropertyID()).get().getPropertyType());
    }
}
