package com.stackroute.bookingservice.controller;


import com.stackroute.bookingservice.model.Booking;
import com.stackroute.bookingservice.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/booking")
@CrossOrigin(origins = "*")
public class BookingController {
    private BookingService bookingService;

    @Autowired
    public BookingController(BookingService bookingService){
        this.bookingService=bookingService;
    }

    @PostMapping("/book")
    public ResponseEntity<Booking> bookFlat(@RequestBody Booking booking)
    {
        System.out.println(booking.toString());
        Booking bookedFlat = bookingService.bookFlat(booking);
        return new ResponseEntity<>(bookedFlat, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Booking>> getAllBookings(){
        List<Booking> bookings = bookingService.getAllBookings();
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Booking>> getUserBookings(@PathVariable Integer userId)
    {
        List<Booking> userBooking = bookingService.getUserBookings(userId);
        return new ResponseEntity<>(userBooking, HttpStatus.OK);
    }
}
