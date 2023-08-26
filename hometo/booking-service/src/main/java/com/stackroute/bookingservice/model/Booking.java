package com.stackroute.bookingservice.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@Document(collection = "booking")
public class Booking {

    @Id
    private String bookingId;
    private String flatId;
    private Integer userId;
    private double finalPrice;

    private String fullName;
    private String email;
    private String phone;

    private String panNumber;

    private String aadharNumber;

}
