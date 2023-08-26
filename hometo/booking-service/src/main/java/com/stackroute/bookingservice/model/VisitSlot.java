package com.stackroute.bookingservice.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@Document(collection = "visitSlot")

public class VisitSlot {
    private String flatId;
    private String userId;
    private String startTime;
    private String endTime;
}
