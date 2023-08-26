import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buyer } from 'src/app/buyer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BuyerProfileService {

  constructor(private http : HttpClient) { }
  Buyerprofile(buyer : Buyer) : Observable<any>{
  return this.http.post('http://localhost:1003/HomeTo/buyer' , buyer)
  }
}