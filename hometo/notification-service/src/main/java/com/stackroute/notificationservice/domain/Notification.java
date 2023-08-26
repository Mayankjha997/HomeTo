package com.stackroute.notificationservice.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
@Document
public class Notification {
    @Id
    private String recipientId;
    private String ownerID;
    private String senderId;
    private String msgToRecipient;
    private String msgToSender;
    private Date date;
    private String attachmentFilePath;
    private String propertyName;
    private String propertyType;
    private String address;
    private float price;
    private String flatId;
    private Integer userId;
    private double finalPrice;

    private String fullName;
    private String email;
    private String startTime;
    private String endTime;
    private Boolean check;
}

