package com.stackroute.paymentservice.Consumer;

import com.stackroute.paymentservice.Configuration.RabbitMqConfig;
import com.stackroute.paymentservice.Dto.BookingStatus;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class PaymentConsumer {
    @RabbitListener(queues = RabbitMqConfig.QUEUE)
    public void paymentListner(BookingStatus bookingStatus){
        // System.out.println(order);
        System.out.println("Received order: " + bookingStatus.toString());
    }


}
