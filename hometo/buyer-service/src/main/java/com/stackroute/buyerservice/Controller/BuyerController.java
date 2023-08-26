package com.stackroute.buyerservice.Controller;

import com.stackroute.buyerservice.Domain.BuyerDetails;
import com.stackroute.buyerservice.Service.BuyerService;
import com.stackroute.buyerservice.exception.AlreadyExistException;
import com.stackroute.buyerservice.exception.BuyerNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/buyer")

public class BuyerController {

    private BuyerService bservice;
    @Autowired
    public BuyerController(BuyerService bservice) {
        this.bservice = bservice;
    }

    @PostMapping("/addbuyer")
    public ResponseEntity<?> addBuyer(@RequestBody BuyerDetails buyer) throws AlreadyExistException
    {
        BuyerDetails b;
        try
        {
            b=bservice.saveBuyerDetails(buyer);
        }
        catch(AlreadyExistException e2)
        {
            throw new AlreadyExistException();
        }
        catch(Exception e1)
        {
            return new ResponseEntity<>(e1.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(b,HttpStatus.CREATED);

    }

    //	GET
    @GetMapping("/getbuyer")
    public ResponseEntity<?> getBuyer()
    {
        List<BuyerDetails> b2=bservice.getAllBuyerDetails();
        return new ResponseEntity<List<BuyerDetails>>(b2,HttpStatus.OK);

    }

    //GET BY EMAIL
    @GetMapping("/getbuyer/{buyeremail}")
    public ResponseEntity<?> getByEmail(@PathVariable String buyeremail)
    {
        BuyerDetails b3=bservice.getBuyerByEmail(buyeremail);
        return new ResponseEntity<BuyerDetails>(b3,HttpStatus.OK);

    }

    //	DELETE
    @DeleteMapping("/delbuyer/{buyeremail}")
    public ResponseEntity<?> deletebyid(@PathVariable String buyeremail) throws BuyerNotFoundException
    {
//        boolean status=bservice.deleteBuyer(buyeremail);
//        return new ResponseEntity<>("deleted successfully",HttpStatus.OK);
        boolean flag;
        try {
            flag=bservice.deleteBuyer(buyeremail);
        }
        catch(BuyerNotFoundException e)
        {
            throw new BuyerNotFoundException();
            //return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(flag,HttpStatus.OK);
    }

    //	UPDATE-PUT
    @PutMapping("/updatebuyer/{buyeremail}")
    public ResponseEntity<?> updateUser(@RequestBody BuyerDetails buyer,@PathVariable String buyeremail)
    {
        BuyerDetails b3=bservice.updateBuyerDetails(buyer, buyeremail);
        return new ResponseEntity<>("updated successfully",HttpStatus.OK);
    }




}
