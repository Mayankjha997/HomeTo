import { Component,OnInit } from '@angular/core';
import { Booking } from '../models/booking';
import { BookingService } from '../services/booking.service';
import { LoginService } from '../services/login/login.service';
import { UserRole } from '../models/register';

interface user {
  userId:number;
  email:string;
  password:string;
  confirmPassword:string;
  role:string;
  phoneNumber:string;
  name:string;
}

@Component({
  selector: 'app-allbooking-page',
  templateUrl: './allbooking-page.component.html',
  styleUrls: ['./allbooking-page.component.css']
})
export class AllbookingPageComponent implements OnInit {

  bookings: Booking[] = [];
  email: string = '';
  // user: any;
  user: user = {
    userId: 0,
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    phoneNumber: '',
    name: ''
  }

  constructor(private authServ: LoginService,private bookingService: BookingService) {}

  ngOnInit(): void {
    if(this.authServ.getRole()=='OWNER')
    {
      this.fetchBookings();
    }
    else{
      this.email=this.authServ.getEmail();
      console.log(this.email);
      this.authServ.getUserByEmail(this.email).subscribe(
        (data:any) => {
          this.user=data;
          console.log(this.user);
          console.log(this.user.userId);
          this.fetchById(this.user.userId);
        
          // console.log("hello world"+this.user.userId);
        
        },
        (error) => {
          console.log(error);
        }
      );
    }
    // console.log("hii world"+this.user.userId);
    // this.fetchBookings();
  }

  fetchBookings(): void {
    this.bookingService.getBooks().subscribe((bookings: Booking[]) => { 
      this.bookings = bookings;
    });
  }

  fetchById(userId:number): void {
    console.log(userId);
    this.bookingService.getBooksById(userId).subscribe(
      (booking:any) => {
        this.bookings=booking;
        console.log(this.bookings);
      }
    );
  }

  userRole(): boolean{
    if(this.authServ.getRole()=='OWNER')
    {
      return true;
    }
    else
    {
      return false;
    } 
  }
}
