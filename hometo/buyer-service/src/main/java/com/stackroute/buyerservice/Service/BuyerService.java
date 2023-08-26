package com.stackroute.buyerservice.Service;

import com.stackroute.buyerservice.Domain.BuyerDetails;
import com.stackroute.buyerservice.Repository.BuyerRepo;
import com.stackroute.buyerservice.exception.AlreadyExistException;
import com.stackroute.buyerservice.exception.BuyerNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BuyerService implements IBuyerService {

    private BuyerRepo brepo;
    @Autowired
    public BuyerService(BuyerRepo brepo) {
        this.brepo = brepo;
    }


    @Override
    public BuyerDetails saveBuyerDetails(BuyerDetails buyer) throws AlreadyExistException {
        Optional<BuyerDetails> b=brepo.findById(buyer.getBuyeremail());
        if(!b.isEmpty())
        {
            throw new AlreadyExistException();
        }
        return brepo.save(buyer);
    }

    @Override
    public List<BuyerDetails> getAllBuyerDetails() {

        List<BuyerDetails> b2=(List<BuyerDetails>) brepo.findAll();
        return b2;

    }

    @Override
    public BuyerDetails getBuyerByEmail(String buyeremail) {

        Optional<BuyerDetails> b3=brepo.findById(buyeremail);
        return b3.get();

    }

    @Override
    public BuyerDetails updateBuyerDetails(BuyerDetails buyer, String buyeremail) {
        Optional<BuyerDetails> existing=brepo.findById(buyeremail);

        if(existing.isEmpty())
        {
            return null;
        }
        BuyerDetails existingBuyer=existing.get();

//        existingBuyer.setBuyeremail(buyer.getBuyeremail());
//        existingBuyer.setPassword(buyer.getPassword());
        existingBuyer.setAdrlist(buyer.getAdrlist());
        existingBuyer.setFirstName(buyer.getFirstName());
        existingBuyer.setLastName(buyer.getLastName());
        existingBuyer.setBudget(buyer.getBudget());
        existingBuyer.setPhoneNo(buyer.getPhoneNo());

        BuyerDetails b= brepo.save(existingBuyer);
        return b;

    }

    @Override
    public boolean deleteBuyer(String buyeremail) throws BuyerNotFoundException {
//        brepo.deleteById(buyeremail);
//        return true;
        boolean flag=false;
        Optional<BuyerDetails> existingemp=brepo.findById(buyeremail);

        if(existingemp.isEmpty())
        {

            throw new BuyerNotFoundException();
        }
        else
        {
            brepo.deleteById(buyeremail);
            flag=true;
        }

        return flag;

    }
}
