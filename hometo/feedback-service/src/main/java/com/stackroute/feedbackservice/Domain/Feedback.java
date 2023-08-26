package com.stackroute.feedbackservice.Domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Feedback {
    @Id
    private String custemail;
    private String name;
    private int rating;
    private String comments;
}
