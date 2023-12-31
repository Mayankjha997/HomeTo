package com.stackroute.paymentservice.Configuration;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMqConfig {
    public final static String QUEUE = "booking_queue";
    public final static String EXCHANGE = "booking_exchange";
    public final static String ROUTING_KEY = "booking_routing_key";

    @Bean
    public Queue provideQueue() {
        return new Queue(QUEUE);
    }

    @Bean
    public TopicExchange provideExchange() {
        return new TopicExchange(EXCHANGE);
    }

    @Bean
    public MessageConverter provideConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public Binding bindQueueToExchange(Queue queue, TopicExchange exchange) {
        return BindingBuilder
                .bind((org.springframework.amqp.core.Queue) queue)
                .to(exchange)
                .with(ROUTING_KEY);
    }

    @Bean
    public AmqpTemplate provideTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(provideConverter());
        return rabbitTemplate;
    }

}
