package com.stackroute.ownerservice.Service;

import com.stackroute.ownerservice.Entity.Owner;
import com.stackroute.ownerservice.Repo.OwnerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OwnerServices {

    @Autowired
    private OwnerRepo repo;

public void saveorupdate(Owner owners)
{
repo.save(owners);
}

public Iterable<Owner> listAll()
{
return this.repo.findAll();
}

public void deleteOwner(String id)
{
repo.deleteById(id);
}

public Owner getOwnerByID(String ownerid)
{
return repo.findById(ownerid).get();
}
}
