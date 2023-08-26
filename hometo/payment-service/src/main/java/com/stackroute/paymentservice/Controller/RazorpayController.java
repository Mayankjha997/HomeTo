package com.stackroute.paymentservice.Controller;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.stackroute.paymentservice.Domain.OrderRequest;
import com.stackroute.paymentservice.Domain.OrderResponse;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/pg")
public class RazorpayController {
    private RazorpayClient client;
    private static final String SECRET_ID = "rzp_test_iUJfkuNQFyCjRe";
    private static final String SECRET_KEY = "qUZScGhNsbb4272z5hLIZGgF" ;


    @RequestMapping(path = "/createOrder", method = RequestMethod.POST)
    public OrderResponse createOrder(@RequestBody OrderRequest orderRequest) {
        OrderResponse response = new OrderResponse();
        try {

            client = new RazorpayClient(SECRET_ID, SECRET_KEY);
            Order order = createRazorPayOrder(orderRequest.getAmount());
            System.out.println("---------------------------");
            String orderId = (String) order.get("id");
            System.out.println("Order ID: " + orderId);
            System.out.println("---------------------------");
            response.setRazorpayOrderId(orderId);
            response.setApplicationFee("" + orderRequest.getAmount());
            response.setSecretKey(SECRET_KEY);
            response.setSecretId(SECRET_ID);
            response.setPgName("razor1");


            return response;
        } catch (RazorpayException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return response;

    }

    private Order createRazorPayOrder(BigInteger amount) throws RazorpayException {

        JSONObject options = new JSONObject();
//        options.put("amount", amount.multiply(new BigInteger("100")));
        options.put("amount", amount);
        options.put("currency", "INR");
        options.put("receipt", "txn_123456");
        options.put("payment_capture", 1);
        return client.orders.create(options);
    }
}
