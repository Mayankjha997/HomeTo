package com.stackroute.propertyservice.model;

import lombok.*;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
@Document
public class Property {
    @Id
    private String propertyID=UUID.randomUUID().toString();
    
    private String propertyName;
    private String propertyType;
    private String address;
    private String description;
    private String amenities;
    private float price;

    // private byte[] image;
}
