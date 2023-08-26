package com.stackroute.paymentservice.Dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BookingStatus {
    private Order order;
    private String status;  //progress, completed
    private String message;
}
