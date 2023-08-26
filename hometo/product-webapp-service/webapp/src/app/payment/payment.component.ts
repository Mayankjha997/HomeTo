import { Component } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PayNowButtonStatusCheckService } from '../pay-now-button-status-check.service';
// import * as Razorpay from 'razorpay';

declare var Razorpay: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
//   amount:number = 0;
//   constructor(private payservice:PaymentService){}

//   ngOnInit():void{}

// OnSubmit(){
//     alert(this.amount);
//     console.log(this.amount);
//     this.payservice.retrieve(this.amount).subscribe((data)=>
//     {console.log('Data:',data);
//     console.log(data);
//     this.openTransactionModal(data);
//   },
//     (error)=>{console.error("Error fetching data:",error);
//   }
//   );
//   }

//   openTransactionModal(response:any){
//     console.log(response);
//     var options={
//       order_id:response.orderId,
//       key:response.key,
//       // key:response.key,
//       amount:response.amount,
//       currency:response.currency,
//       name:'Payment',
//       description:'Payment',
//       // image :"D:\UI Payment\UI\src\assets\logo (1).png",
//       handler:(response:any)=>{
// this.processResponse(response);
//       },
//       prefill:{
//         name:"Payment Gateway",
//         email:"project@gmail.com",
//         contact:9090909090
//       },
//       notes:{
//         address:'Booking'
//       },
//       theme:{
//         color:'blue'
//       }
//     };
//     var razorpayObject = new Razorpay(options);
//     razorpayObject.open();
//   }
//   processResponse(resp:any){
//     console.log(resp);
//   }
// }

  title = 'UI';
  amount:any = 0;

  constructor(private payStatus:PayNowButtonStatusCheckService,private paymentService: PaymentService,
    private router: Router,
    private route: ActivatedRoute,) {
      
    }

  ngOnInit(): void {
    this.amount = this.route.snapshot.paramMap.get('amount');
  }

  onSubmit() {
    // this.payStatus.payNowStatus=true;
    if (this.amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }
    const amountInPaise = this.amount * 100;

    const orderData = {
      amount: amountInPaise, // Provide the amount in paise
      currency: 'INR' // Specify the currency
    };

    // const orderData = {
    //   amount: this.amount 
    // };

    // Call the service method to initiate payment
    this.paymentService.createRazorpayOrder(orderData).subscribe(
      (response: any) => {
        console.log('Response:', response);
        this.openTransactionModal(response);
        // this.payStatus.payNowStatus=true;
        this.router.navigate(['home']);
      },
      (error: any) => {
        console.error('Error creating Razorpay order:', error);
      }
    );
  }
  

  
  openTransactionModal(response: any) {
    var options = {
      order_id: response.order_id,
      key: 'rzp_test_iUJfkuNQFyCjRe', // Replace with your actual Razorpay API key
      amount: response.amount,
      currency: response.currency,
      name: 'Payment',
      description: 'Payment',
      // image: 'https://thumbs.dreamstime.com/b/creative-sm-logo-icon-design-simple-clean-crisp-vector-format-170827106.jpg',
      handler: (response: any) => {
        this.processResponse(response);
      },
      prefill: {
        name: 'Payment Gateway',
        email: 'project@gmail.com',
        contact: 9090909090
      },
      notes: {
        address: 'Online Counselling'
      },
      theme: {
        color: '#f37890'
      }
    };
    var razorpayObject = new Razorpay(options);
    razorpayObject.open();
  }

  processResponse(resp: any) {
    console.log('Payment response:', resp);
  }
}