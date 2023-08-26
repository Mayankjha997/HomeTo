import { Component, OnInit } from '@angular/core';
import { NotificationserviceService } from '../services/notificationservice.service';
import { message } from '../models/message';



@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationComponent implements OnInit {
  messages: message[] = [];
  message: message = {
    msgToRecipient: '',
    msgToSender: '',
    isRead: false,
    recipientId: '', 
    senderId: '',
    ownerID: ''
  };

  constructor(private scall: NotificationserviceService) {}

  ngOnInit(): void {
    this.scall.onserverdata().subscribe((data: message[]) => {
      this.messages = data;
    });
  }
  async onSubmit() {
    this.scall.postdata(this.message).subscribe(() => {
      alert('Success');
    });

    try {
      const response = await fetch('/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.message)
      });
      
      if (response.ok) {
        alert('Email sent successfully.');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending email.');
    }
  }
  }