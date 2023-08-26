package com.stackroute.ownerservice.Repo;

import com.stackroute.ownerservice.Entity.Owner;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OwnerRepo extends MongoRepository<Owner,String> {
}
