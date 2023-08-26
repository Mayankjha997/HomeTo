package com.stackroute.propertyservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT,reason = "Property already exists")
public class AlreadyExistException extends Exception{
}
