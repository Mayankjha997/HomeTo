import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http : HttpClient) { }

  getBooks() : Observable<Booking[]>{
    return this.http.get<Booking[]>("http://localhost:1002/booking/all");
  }

  addBooks(booking : Booking) : Observable<any>{
    return this.http.post('http://localhost:1002/booking/book' , booking);
  }

  getBooksById(userId:number) : Observable<Booking[]>{
    return this.http.get<Booking[]>(`http://localhost:1002/booking/user/${userId}`);
  }
}
