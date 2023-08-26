import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../models/property';
import { Observable } from 'rx';
import { MatDialog } from '@angular/material/dialog';
import { BookingPageComponent } from '../booking-page/booking-page.component';
import { LoginService } from '../services/login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit{

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

  constructor(private snackBar: MatSnackBar, private authServ: LoginService, private router: Router,private dialog: MatDialog, private route: ActivatedRoute, private propertyServ: PropertyService){}

  ngOnInit(): void{
      this.propertyID = this.route.snapshot.paramMap.get('propertyID');
      this.propertyServ.getPropertyById(this.propertyID).subscribe((data) => {
        this.property=data;
        this.propertyServ.setPropertyData(this.property);
      });
  }

  openBookForm() : void {
    if(this.authServ.isAuthenticated()==false)
    {
        this.openSnackBar('Login to book property !!');
    }
    else{
      this.dialog.open(BookingPageComponent);
    }
  }

  openSchedulePage(): void {
    if(this.authServ.isAuthenticated()==false)
    {
        this.openSnackBar('Login to schecule visit !!');
    }
    else{
      this.router.navigate(['schedule-visit']);
    }
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

  private openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000
    });
  }
}
