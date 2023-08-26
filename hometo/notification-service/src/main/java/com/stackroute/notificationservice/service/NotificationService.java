package com.stackroute.notificationservice.service;

import com.stackroute.notificationservice.Config.BookDTO;

//import com.stackroute.notificationservice.Domain.Notification;
//import com.stackroute.notificationservice.Repository.NotificationRepository;
//import jakarta.mail.MessagingException;
//import jakarta.mail.internet.MimeMessage;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.io.FileSystemResource;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.MimeMessageHelper;
//import org.springframework.stereotype.Service;
//
//import java.io.File;
//import java.util.List;

import com.stackroute.notificationservice.Repository.NotificationRepository;
import com.stackroute.notificationservice.domain.Notification;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitAdmin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.List;


@Service
public class NotificationService {
    private final JavaMailSender mailSender;
    @Autowired
    public NotificationRepository nrepo;
    @Autowired
    private RabbitAdmin admin;
    private BookDTO bdto;

    @Autowired
    public NotificationService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }
//    public void sendEmail(Notification n){
//        SimpleMailMessage simpleMailMessage=new SimpleMailMessage();
//        simpleMailMessage.setFrom("naveenreddy0457@gmail.com");
//        simpleMailMessage.setBcc(n.getOwnerID());
//        simpleMailMessage.setTo(n.getSenderId());
//        simpleMailMessage.setSubject(n.getMsgToRecipient());
//        simpleMailMessage.setText(n.getMsgToSender());
//        this.mailSender.send(simpleMailMessage);
//    }

    // public void sendEmail(Notification n){
    //     MimeMessage mimeMessage = mailSender.createMimeMessage();
    //     MimeMessageHelper messageHelper = null;
    //     try {
    //         messageHelper = new MimeMessageHelper(mimeMessage, true);
    //         messageHelper.setFrom("naveenreddy0457@gmail.com");
    //         messageHelper.setBcc(n.getOwnerID());
    //         messageHelper.setTo(n.getSenderId());
    //         messageHelper.setSubject(n.getMsgToRecipient());
    //         String messageContent;
    //         messageContent = "Hello,\n"+ n.getMsgToSender()+ "\n\nThank you for your booking/visit request.\n\nBest regards,\nHOMETO";
    //         messageHelper.setText(messageContent);

    //         if (n.getAttachmentFilePath() != null) {
    //             FileSystemResource fileSystemResource = new FileSystemResource(new File(n.getAttachmentFilePath()));
    //             messageHelper.addAttachment(fileSystemResource.getFilename(), fileSystemResource);
    //         }

    //         mailSender.send(mimeMessage);
    //     } catch (MessagingException e) {
    //         e.printStackTrace();
    //     }
    // }
      public void sendEmail(Notification n){
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = null;
        System.out.println("hellooooooooooo");
        try {
            messageHelper = new MimeMessageHelper(mimeMessage, true);
            messageHelper.setFrom("naveenreddy0457@gmail.com");
            // messageHelper.setBcc(n.getOwnerID());
            messageHelper.setTo(book1(bdto).getEmail());
            messageHelper.setSubject("Confirmation of Your Booking/Visit - Warm Welcome from HOMETO!");
            String messageContent;
            // messageContent = "Hello,\n"+book1(bdto).getFullName()+",\n"+"Your Id:"+book1(bdto).getUserId()+"\n"+"Flat Id:"+book1(bdto).getFlatId()+"\n"+book1(bdto).getFinalPrice()+ "\n\nThank you for your booking/visit request.\n\nBest regards,\nHOMETO";
             messageContent = "🎉 Greetings from the HOMETO Family! 🎉\n\n"+
             
             "\nWe trust this message finds you in high spirits. We wanted to take a moment to express our heartfelt appreciation for choosing HOMETO for your recent booking/visit. Your trust in us warms our hearts!\n\n"+
             
             "🌟 Your Booking/Visit Request Is Confirmed! 🌟\n\n"+
             
            " We're absolutely thrilled to share the news that we've received your booking/visit request and are eagerly preparing to welcome you. Your choice to journey with us is a true honor, and we can't wait to make your time with us memorable.\n\n"+
             
             "🏡 Your Comfort Is Our Priority 🏡\n\n"+
             
             "At HOMETO, your comfort and satisfaction are at the core of everything we do. If you have any special requests or if there's anything we can do to make your experience even more delightful, please feel free to let us know. Our dedicated team is here to ensure every moment you spend with us is exceptional.\n\n"+
             
             "🌈 Get Ready for an Amazing Time! 🌈\n"+
             
             "As the day of your booking/visit approaches, get ready to embark on a journey of comfort, relaxation, and enjoyment. We're excited to have you join us, and we promise to make your time with us truly memorable.\n\n"+
             
             "If you have any inquiries or need assistance before your booking/visit, please don't hesitate to reach out. We're here to assist and ensure that your experience with HOMETO exceeds your expectations.\n\n"+
             
             "🏠 Looking Forward to Hosting You! 🏠\n"+
             
             "Once again, thank you for choosing HOMETO. We're counting down the days to your arrival and can't wait to provide you with a warm and unforgettable experience.\n\n"+
             
             "Best Regards,\n\n"+
             "The Enthusiastic Team at HOMETO";
            messageHelper.setText(messageContent);
            System.out.println("helloooooooooo0000o");

            if (n.getAttachmentFilePath() != null) {
                FileSystemResource fileSystemResource = new FileSystemResource(new File(n.getAttachmentFilePath()));
                messageHelper.addAttachment(fileSystemResource.getFilename(), fileSystemResource);
            }

            mailSender.send(mimeMessage);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }

    @RabbitListener(queues = "booking.queue")
    public Notification book1(BookDTO b){
        bdto=b;
        Notification n= new Notification();
        n.setFullName( bdto.getJsonObject().get("fullName").toString());
        n.setFlatId( bdto.getJsonObject().get("flatId").toString());
        n.setUserId(Integer.valueOf(bdto.getJsonObject().get("userId").toString()));
        n.setFinalPrice(Double.parseDouble(bdto.getJsonObject().get("finalPrice").toString()));
        n.setEmail(bdto.getJsonObject().get("email").toString());
        return n;
    }
    public Notification savemsg(Notification n){
        return nrepo.save(n);
    }
    public List<Notification> getNotificationMessages() {
        List<Notification> notificationList=nrepo.findAll();
        return notificationList;
    }
}