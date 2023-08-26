import { Component,OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegistrartionComponent } from '../registrartion/registrartion.component';
import { MatDialog } from '@angular/material/dialog';
import { BuyerProfileComponent } from '../buyer-profile/buyer-profile.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public authServ: LoginService, private _dialog : MatDialog,private router: Router,private route: ActivatedRoute,private authService:LoginService){}

  userEmailFromQueryParam: string | null = null;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => { 
      this.userEmailFromQueryParam = params['email'] || null;
    }); 
  }

  openLoginForm() {
    // Redirect to the login page
    this.router.navigate(['/login']);
  }
  openRegisterationForm() {
    // Redirect to the registration page
    this.router.navigate(['/registrartion']); // Corrected typo in the route path
  }
  // openLoginForm(){
  //   this._dialog.open(LoginComponent)
  // }
  // openRegisterationForm(){
  //   this._dialog.open(RegistrartionComponent)
  // }
  openBuyerProfileForm(){
    this._dialog.open(BuyerProfileComponent)
  }

  logout(): void{
    this.authServ.logout();
  }

}
