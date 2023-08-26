package com.stackroute.feedbackservice.Service;

import com.stackroute.feedbackservice.Domain.Feedback;

import java.util.List;
import java.util.Optional;

public interface IFeedbackService {
    public Feedback saveFeedback(Feedback f);
    public List<Feedback> getFeedback();
    public Optional<Feedback> getFeedbackById(String custemail);
}
