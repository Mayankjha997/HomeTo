package com.stackroute.buyerservice.Service;


import com.stackroute.buyerservice.Domain.BuyerDetails;
import com.stackroute.buyerservice.exception.AlreadyExistException;
import com.stackroute.buyerservice.exception.BuyerNotFoundException;

import java.util.List;

public interface IBuyerService {
    public BuyerDetails saveBuyerDetails(BuyerDetails buyer) throws AlreadyExistException;
    public List<BuyerDetails> getAllBuyerDetails();
    public BuyerDetails getBuyerByEmail(String buyeremail);
    public BuyerDetails updateBuyerDetails(BuyerDetails buyer,String buyeremail);
    public boolean deleteBuyer(String buyeremail) throws BuyerNotFoundException;


}
