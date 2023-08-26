package com.stackroute.propertyservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND,reason = "There is no property with requested ID")
public class PropertyNotFoundException extends Exception{
}
