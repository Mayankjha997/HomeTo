package com.stackroute.bookingservice.service;

import com.stackroute.bookingservice.Repository.FlatRepository;
import com.stackroute.bookingservice.configuration.BookDTO;
import com.stackroute.bookingservice.model.Booking;

import org.json.simple.JSONObject;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.core.RabbitAdmin;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Random;

@Service
public class BookingService {
    private FlatRepository flatRepository;
    @Autowired
    private RabbitTemplate rabbitTemplate;
    @Autowired
    private RabbitAdmin admin;
    @Autowired
    private DirectExchange exchange;


    @Autowired
    public BookingService(FlatRepository flatRepository)
    {

        this.flatRepository=flatRepository;
    }

    public Booking bookFlat(Booking booking)
    {
        BookDTO bookDTO=new BookDTO();
        JSONObject jsonObject=new JSONObject();
        jsonObject.put("fullName",booking.getFullName());
        jsonObject.put("flatId",booking.getFlatId());
        jsonObject.put("userId",booking.getUserId());
        jsonObject.put("finalPrice",booking.getFinalPrice());
        jsonObject.put("email",booking.getEmail());
        bookDTO.setJsonObject(jsonObject);
        rabbitTemplate.convertAndSend(exchange.getName(),"booking-routing",bookDTO);
        String generatedBookingId = generateBookingId(); // Custom method to generate unique IDs
        booking.setBookingId(generatedBookingId);
        return flatRepository.save(booking);
    }

    private String generateBookingId() {
        long timestamp = Instant.now().toEpochMilli();
        int random = new Random().nextInt(10000); // You can adjust the range as needed
        return "B" + timestamp + random; // Custom format for the booking ID
    }

    public List<Booking> getAllBookings()
    {
        return flatRepository.findAll();
    }

    public List<Booking> getUserBookings(Integer userId) {
        return flatRepository.findByUserId(userId);
    }


}
