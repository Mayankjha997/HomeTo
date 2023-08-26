import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrartionComponent } from './registrartion/registrartion.component';
import { BuyerProfileComponent } from './buyer-profile/buyer-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';

  // constructor(private _dialog : MatDialog){}
  // openAddForm(){
  //   this._dialog.open(BookingPageComponent)

  // }

}
