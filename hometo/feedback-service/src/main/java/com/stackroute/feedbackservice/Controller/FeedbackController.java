package com.stackroute.feedbackservice.Controller;


import com.stackroute.feedbackservice.Domain.Feedback;
import com.stackroute.feedbackservice.Service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins = "*")
public class FeedbackController {

@Autowired
private FeedbackService feedbackService;

@PostMapping("/save/feedback")
public ResponseEntity<?> saveFeedback(@RequestBody Feedback f){
    Feedback f1=feedbackService.saveFeedback(f);
    return new ResponseEntity<>(f1, HttpStatus.CREATED);
}

@GetMapping("/get/feedback")
public ResponseEntity<?> getFeedback()
{
    List<Feedback> f2=feedbackService.getFeedback();
    return new ResponseEntity<>(f2,HttpStatus.OK);
}

@GetMapping("/getFeedbackbyId/{custemail}")
public ResponseEntity<?> getFeedbackById(@PathVariable String custemail){
    Optional<Feedback> f3=feedbackService.getFeedbackById(custemail);
    return new ResponseEntity<>(f3,HttpStatus.OK);
}

}
