import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'http://localhost:1007/api/payments'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  // savePayment(paymentData: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/post`, paymentData);
  // }

  // fetchPaymentStatus(bookingId: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/booking/${bookingId}`);
  // }

  createRazorpayOrder(orderData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/post`, orderData);
  }
}
