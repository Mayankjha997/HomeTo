import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class NotificationserviceService {
  messages: message[] = [];
  message: message = {
    msgToRecipient: '',
    msgToSender: '',
    recipientId: '',
    senderId: '',
    ownerID: '',
    isRead: false
  };

  constructor(private http:HttpClient) { }
  onserverdata(): Observable<any> {
    return this.http.get("http://localhost:1005/notifications")
  }
  postdata(message:any){
    return this.http.post("http://localhost:1005/sendemail",message)
  }
  sendEmail():Observable<any> {
    return this.http.post(`http://localhost:1005/sendemail`,this.message)
  }
}
