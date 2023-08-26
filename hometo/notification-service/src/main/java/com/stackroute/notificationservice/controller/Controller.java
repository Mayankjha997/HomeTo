package com.stackroute.notificationservice.controller;


import com.stackroute.notificationservice.domain.Notification;
import com.stackroute.notificationservice.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class Controller {
    private final NotificationService notificationService;
    @Autowired
    public Controller(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @PostMapping("/sendemail")
    public ResponseEntity<?> sendEmail(@RequestBody Notification notification){
        this.notificationService.sendEmail(notification);
        this.notificationService.savemsg(notification);
        return ResponseEntity.ok("success");
    }

    @GetMapping("/notifications")
    public ResponseEntity<?> displayNotifications(Notification notification) {
        List<Notification> messages = notificationService.getNotificationMessages();
        return new ResponseEntity<List<Notification>>(messages, HttpStatus.OK);
    }
}

