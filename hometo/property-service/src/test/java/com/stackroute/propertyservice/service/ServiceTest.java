package com.stackroute.propertyservice.service;

import com.stackroute.propertyservice.exception.AlreadyExistException;
import com.stackroute.propertyservice.exception.PropertyNotFoundException;
import com.stackroute.propertyservice.model.Property;
import com.stackroute.propertyservice.repository.PropertyRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(SpringExtension.class)
public class ServiceTest {
    @Mock
    private PropertyRepository propRepo;
    @InjectMocks
    private PropertyService propServ;

    private Property prop;

    @BeforeEach
    void setUp(){
        prop=new Property("101","Sweet Home","Home","Bakers street","This is an well furnished house","Lawn, Balcony, 3BHK",1000000);
    }

    @AfterEach
    void tearDown(){
        prop=null;
    }

    @Test
    public void checkAddPropertySuccess() throws AlreadyExistException {
        Property prop1=new Property("103","Sweet Home","Home","Bakers street","This is an well furnished house","Lawn, Balcony, 3BHK",1000000);
        when(propRepo.findById(prop.getPropertyID())).thenReturn(Optional.ofNullable(null));
        when(propRepo.save(prop)).thenReturn(prop);

        assertEquals(prop,propServ.addProperty(prop));
        verify(propRepo,times(1)).save(any());
        verify(propRepo,times(1)).findById(any());
    }

    @Test
    public void checkAddPropertyFailure()
    {
        when(propRepo.findById(prop.getPropertyID())).thenReturn(Optional.ofNullable(prop));
        assertThrows(AlreadyExistException.class,()->propServ.addProperty(prop));
        verify(propRepo,times(1)).findById(any());
    }

    @Test
    public void deleteSuccess() throws PropertyNotFoundException {
        when(propRepo.findById(prop.getPropertyID())).thenReturn(Optional.ofNullable(prop));
        boolean b=propServ.deleteProperty(prop.getPropertyID());
        assertEquals(true,b);
        verify(propRepo,times(1)).deleteById(any());
        verify(propRepo,times(1)).findById(any());
    }

    @Test
    public void checkDeleteFailure()
    {
        when(propRepo.findById(prop.getPropertyID())).thenReturn(Optional.ofNullable(null));
        assertThrows(PropertyNotFoundException.class,()->propServ.deleteProperty(prop.getPropertyID()));
        verify(propRepo,times(1)).findById(any());
    }

    @Test
    public void checkGetPropertyList()
    {
        Property prop1=new Property("101","Sweet Home","Home","Bakers street","This is an well furnished house","Lawn, Balcony, 3BHK",1000000);
        Property prop2=new Property("102","Sweet Rome","Home","Bakers street","This is an well furnished house","Lawn, Balcony, 3BHK",1000000);
        List<Property> propertyList= Arrays.asList(prop1,prop2);

        when(propRepo.findAll()).thenReturn(propertyList);

        List<Property> propertyList1=propServ.getAllProperty();

        assertEquals(2,propertyList1.size());
        assertEquals("Sweet Home",propertyList1.get(0).getPropertyName());
        assertEquals("Sweet Rome",propertyList1.get(1).getPropertyName());
    }

    @Test
    public void checkUpdateSuccess() throws PropertyNotFoundException {
        Property prop=new Property("101","Sweet Home","Home","Bakers street","This is an well furnished house","Lawn, Balcony, 3BHK",1000000);
        Property prop1=new Property("101","Home Sweet","Home","Bakers street","This is an well furnished house","Lawn, Balcony, 3BHK",1000000);

        when(propRepo.findById("101")).thenReturn(Optional.of(prop));
        when(propRepo.save(any(Property.class))).thenReturn(prop1);

        Property result=propServ.updateProperty(prop1,"101");

        assertEquals(prop1.getPropertyName(),result.getPropertyName());

        verify(propRepo,times(1)).findById("101");
        verify(propRepo,times(1)).save(prop1);
    }

    @Test
    public void checkUpdateFailure() throws PropertyNotFoundException {
        Property prop1=new Property("101","Sweet Home","Home","Bakers street","This is an well furnished house","Lawn, Balcony, 3BHK",1000000);

        when(propRepo.findById("101")).thenReturn(Optional.ofNullable(null));
        assertThrows(PropertyNotFoundException.class,()->propServ.updateProperty(prop1,"101"));
        verify(propRepo,times(1)).findById("101");
        verify(propRepo,never()).save(any(Property.class));
    }
}
