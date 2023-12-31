package com.stackroute.paymentservice.Controller;


import com.stackroute.paymentservice.Domain.Payment;
import com.stackroute.paymentservice.Domain.PaymentStatus;
import com.stackroute.paymentservice.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    private final PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/post")
    public ResponseEntity<Payment> savePayment(@RequestBody Payment payment) {
        Payment savedPayment = paymentService.savePayment(payment);

        return ResponseEntity.ok(savedPayment);
    }

    @GetMapping("/booking/{bookingId}")
    public ResponseEntity<PaymentStatus> fetchStatusForBooking(@PathVariable Long bookingId) {
        PaymentStatus status = paymentService.fetchStatusForBooking(bookingId);
        if (status != null) {
            return ResponseEntity.ok(status);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
