package com.stackroute.bookingservice.service;

import com.stackroute.bookingservice.Repository.FlatVisitRepository;
import com.stackroute.bookingservice.model.VisitSlot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class FlatSchedulingService {
@Autowired
    private FlatVisitRepository flatVisitRepository;

public boolean checkAvailability(VisitSlot visitSlot) throws Exception
{
    List<VisitSlot> visitSlot1 = flatVisitRepository.findByFlatId(visitSlot.getFlatId())
    .orElseThrow(()-> new Exception("Flat not found"));

    if(visitSlot1.isEmpty()) return true;
    boolean isSlotAvailable = visitSlot1.stream()
            .noneMatch(slot -> isOverlap(LocalDateTime.parse(slot.getStartTime()) , LocalDateTime.parse(slot.getEndTime()), LocalDateTime.parse(visitSlot.getStartTime()),LocalDateTime.parse(visitSlot.getEndTime())));

    if(!isSlotAvailable){
        return false;
    }
    return true;
}

public VisitSlot scheduleVisit(VisitSlot visitSlot) throws Exception
{
    if(checkAvailability(visitSlot)){
        VisitSlot savedVisit = flatVisitRepository.save(visitSlot);
        return savedVisit;
    }
    throw new RuntimeException("slot already booked");

}

private boolean isOverlap(LocalDateTime start1,LocalDateTime end1,LocalDateTime start2, LocalDateTime end2)
{
    return start1.isBefore(end2) && end1.isAfter(start2);
}
}
