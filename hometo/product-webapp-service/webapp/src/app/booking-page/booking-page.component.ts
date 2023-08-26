import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../services/booking.service';
import { Booking } from '../models/booking';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../services/property.service';
import { Property } from '../models/property';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';
import { MatDialogRef } from '@angular/material/dialog';
import { PayNowButtonStatusCheckService } from '../pay-now-button-status-check.service';
import { NotificationserviceService } from '../services/notificationservice.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent {

  propertyID: any='';
  property:Property={
    propertyID: '',
    propertyName: '',
    propertyType: '',
    address: '',
    description: '',
    amenities: '',
    price: 0
  };

  booking: Booking = {}
  bookform!: FormGroup;

  user:any;
  email:string='';
  sharedPropertyData: Property=this.propertyServ.getPropertyData();
  userId:number = this.authServ.getUserId();
 

  constructor(private scall:NotificationserviceService, private payStatus: PayNowButtonStatusCheckService,private dialogRef: MatDialogRef<BookingPageComponent>,private authServ: LoginService ,private propertyServ: PropertyService,private route: ActivatedRoute,private router: Router, private snackBar: MatSnackBar, private _fb: FormBuilder, private _bookservice: BookingService, private _dialogref: DialogRef<BookingPageComponent>) {
    this.bookform = this._fb.group({
      // bookingId: ['', Validators.required],
      flatId: [{value:this.sharedPropertyData.propertyID,disabled:true}, Validators.required],
      userId: [{value:this.userId,disabled:true}, Validators.required],
      finalPrice: [{value:this.sharedPropertyData.price,disabled:true}, Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', [Validators.required,Validators.pattern('^[0-9]{10}$')]],
      panNumber: ['', [Validators.required,Validators.pattern('^([A-Z]){5}([0-9]){4}([A-Z]){1}$')]],
      aadharNumber: ['', [Validators.required,Validators.pattern('^[0-9]{12}$')]],
    });
  }


  ngOnInit(): void {
  
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  onFormSubmit() {
    if (this.bookform.valid) {
      this.fillData()
      this.router.navigate(['payment',this.sharedPropertyData.price]);
      // if(this.payStatus.payNowStatus==true)
      // {
        this._bookservice.addBooks(this.booking).subscribe({
          next: (val: any) => {//define object
            // alert('book added');
            this.scall.sendEmail().subscribe((data: any)=> {
              console.log(data)
            });
            this.openSnackBar('Pay now to complete booking :)');
            this._dialogref.close();
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      //  }
     }
    
    // this._dialogref.close();
    // this.openSnackBar('Pay now to complete booking :)');
  }

  private fillData() {
    // this.booking.bookingId = this.bookform.value.bookingId
    this.booking.aadharNumber = this.bookform.value.aadharNumber;
    this.booking.flatId = this.sharedPropertyData.propertyID;
    this.booking.userId = this.userId;
    this.booking.finalPrice = this.sharedPropertyData.price;
    this.booking.panNumber = this.bookform.value.panNumber;
    this.booking.email = this.bookform.value.email;
    this.booking.phone = this.bookform.value.phone;
    this.booking.fullName = this.bookform.value.fullName;
    console.log(this.booking);
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000
    });
  }

}
