package com.stackroute.propertyservice.controller;

import com.stackroute.propertyservice.model.Property;
import com.stackroute.propertyservice.service.PropertyService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.mockito.internal.verification.VerificationModeFactory.times;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class ControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private PropertyService propServ;

    @InjectMocks
    private PropertyController propCtrl;
    private Property prop;

    @BeforeEach
    void setUp()
    {
        prop=new Property("101","Sweet Home","Home","Bakers street","This is an well furnished house","Lawn, Balcony, 3BHK",1000000);
        mockMvc=MockMvcBuilders.standaloneSetup(propCtrl).build();
    }

    @AfterEach
    void tearDown()
    {
        prop=null;
    }

    @Test
    public void testAddProperty() throws Exception {
        when(propServ.addProperty(any())).thenReturn(prop);
        mockMvc.perform(post("/api/v1/addProperty")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(prop)))
                .andExpect(status().isCreated())
                .andDo(MockMvcResultHandlers.print());
        verify(propServ,times(1)).addProperty(any());
    }

    @Test
    public void checkGetAllProperties() throws Exception {
        List<Property> propertyList=List.of(
                new Property("101","Sweet Home","Home","Bakers street","This is an well furnished house","Lawn, Balcony, 3BHK",1000000),
                new Property("102","Apex Homes","Home","London street","This is an well furnished house","Lawn, Balcony, 3BHK",1000000)
        );

        when(propServ.getAllProperty()).thenReturn(propertyList);

        mockMvc.perform(get("/api/v1/getProperties"))
                .andExpect(status().isOk())
                .andExpect(content().json(jsonToString(propertyList)));
    }
    @Test
    public void checkUpdateProperty() throws Exception {
       Property updatedProp=new Property("101","Apex Homes","Home","Bakers street","This is an well furnished house","Lawn, Balcony, 3BHK",1000000);

       when(propServ.updateProperty(updatedProp,"101")).thenReturn(updatedProp);

       mockMvc.perform(put("/api/v1/updateProperty/101")
               .contentType(MediaType.APPLICATION_JSON)
               .content(jsonToString(updatedProp)))
               .andExpect(status().isOk())
               .andExpect(content().json(jsonToString(updatedProp)));
    }
    @Test
    public void checkDeleteProperty() throws Exception {
        mockMvc.perform(delete("/api/v1/deleteProperty/101"))
                .andExpect(status().isOk());
    }

    private static String jsonToString(final Object ob) throws JsonProcessingException {
        String result;
        try {
            ObjectMapper mapper = new ObjectMapper();
            String jsonContent = mapper.writeValueAsString(ob);
            result = jsonContent;
        } catch(JsonProcessingException e) {
            result = "JSON processing error";
        }

        return result;
    }
}
