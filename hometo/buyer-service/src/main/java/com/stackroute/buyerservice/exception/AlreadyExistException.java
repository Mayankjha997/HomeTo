package com.stackroute.buyerservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT, reason = "Trying to add same Buyer Data")
public class AlreadyExistException extends Exception{
}
