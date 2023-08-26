package com.stackroute.feedbackservice.Service;

import com.stackroute.feedbackservice.Domain.Feedback;
import com.stackroute.feedbackservice.Repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService implements IFeedbackService{

    @Autowired
    private FeedbackRepository frepo;

    @Override
    public Feedback saveFeedback(Feedback f) {
        Feedback f1 = (Feedback) frepo.save(f);
        return f1;
    }

    @Override
    public List<Feedback> getFeedback() {
        List<Feedback> f1=frepo.findAll();
        return f1;
    }

    @Override
    public Optional<Feedback> getFeedbackById(String custemail) {
        Optional<Feedback> f2=frepo.findById(custemail);
        if(f2.isEmpty())
        {
            return null;
        }
        return f2;
    }




}
