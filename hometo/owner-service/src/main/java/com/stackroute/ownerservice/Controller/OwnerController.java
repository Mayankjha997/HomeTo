package com.stackroute.ownerservice.Controller;


import com.stackroute.ownerservice.Entity.Owner;
import com.stackroute.ownerservice.Service.OwnerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/owner")
@CrossOrigin
public class OwnerController {

    @Autowired
private OwnerServices ownerServices;

@PostMapping(value="/save")
private String saveOwner(@RequestBody Owner owners)
{
ownerServices.saveorupdate(owners);
return owners.get_id();
}

@GetMapping(value = "/getAll")
    private Iterable<Owner>getOwners()
{
    return ownerServices.listAll();
}

@PostMapping(value="/edit/{id}")
private Owner update(@RequestBody Owner owner, @PathVariable(name = "id")String _id)
{
owner.set_id(_id);
ownerServices.saveorupdate(owner);
return owner;
}

@DeleteMapping("/delete/{id}")
    private void deleteOwner(@PathVariable("id") String _id)
    {
ownerServices.deleteOwner(_id);
    }

@RequestMapping("/owner/{id}")
private Owner getOwners(@PathVariable(name = "id") String ownerid)
{
return ownerServices.getOwnerByID(ownerid);
}
}
