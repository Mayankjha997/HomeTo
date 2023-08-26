package com.stackroute.bookingservice.Repository;

import com.stackroute.bookingservice.model.VisitSlot;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FlatVisitRepository extends MongoRepository<VisitSlot, String> {
Optional<List<VisitSlot>> findByFlatId(String flatId);
}
