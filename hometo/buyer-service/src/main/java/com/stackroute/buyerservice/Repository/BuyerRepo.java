package com.stackroute.buyerservice.Repository;

import com.stackroute.buyerservice.Domain.BuyerDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface BuyerRepo extends MongoRepository<BuyerDetails,String> {

}
