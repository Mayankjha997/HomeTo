package com.stackroute.bookingservice.Repository;


import com.stackroute.bookingservice.model.Booking;
import org.springframework.data.mongodb.core.aggregation.ArrayOperators;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlatRepository extends MongoRepository<Booking,String> {
List<Booking> findByUserId(Integer userId);
}
