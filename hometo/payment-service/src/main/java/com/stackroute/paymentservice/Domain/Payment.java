package com.stackroute.paymentservice.Domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;
    private Double amount;
    private PaymentStatus status;
    @Override
    public String toString() {
        return "Payment{" +
                "bookingId=" + bookingId +
                ", amount=" + amount +
                ", status=" + status +
                '}';
    }

    public Payment() {
    }

    public Payment(Long bookingId, Double amount, PaymentStatus status) {
        this.bookingId = bookingId;
        this.amount = amount;
        this.status = status;
    }

    public Long getBookingId() {
        return bookingId;
    }

    public void setBookingId(Long bookingId) {
        this.bookingId = bookingId;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public PaymentStatus getStatus() {
        return status;
    }

    public void setStatus(PaymentStatus status) {
        this.status = status;
    }

}
