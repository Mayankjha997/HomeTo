package com.stackroute.bookingservice.controller;

import com.stackroute.bookingservice.model.VisitSlot;
import com.stackroute.bookingservice.service.BookingService;
import com.stackroute.bookingservice.service.FlatSchedulingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class FlatVisitController {
    @Autowired
    private FlatSchedulingService flatSchedulingService;

    @PostMapping("/schedule-visit")
    public ResponseEntity<VisitSlot> scheduleVisit(@RequestBody VisitSlot visitSlot)
    {
        try{
            flatSchedulingService.scheduleVisit(visitSlot);
            return ResponseEntity.ok(visitSlot);
        }   catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(visitSlot);
        }
    }

    @PostMapping("/check")
    public ResponseEntity<Boolean> checkavailable(@RequestBody VisitSlot visitSlot)
    {
        try{
            Boolean status = flatSchedulingService.checkAvailability(visitSlot);
            return ResponseEntity.ok(status);
        }
        catch (Exception e)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(false);
        }
    }
}

