package com.stackroute.buyerservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.NOT_FOUND , reason = "there is no emp with requested id")
public class BuyerNotFoundException extends Exception{
}
