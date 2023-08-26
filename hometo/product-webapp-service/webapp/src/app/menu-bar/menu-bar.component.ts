import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ChatBotComponent } from '../chat-bot/chat-bot.component';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  constructor(private snackBar:MatSnackBar,private router:Router, private authServ: LoginService,private dialog: MatDialog){}

  openHome(): void {
    this.router.navigate(['home']);
  }

  openAboutUs(): void {
    this.router.navigate(['aboutUs']);
  }

  openApartments(): void {
    this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(()=>this.router.navigate(['/property-type','Apartment']));
  }

  openHouses(): void {
    this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(()=>this.router.navigate(['/property-type','House']));
  }

  openBungalows() : void {
    this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(()=>this.router.navigate(['/property-type','Bungalow']));
  }

  openFlats() : void {
  this.router.navigateByUrl('/', {skipLocationChange: true})
    .then(()=>this.router.navigate(['/property-type','Flat']));
  }

  openPlots(): void {
    this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(()=>this.router.navigate(['/property-type','Plot']));
  }

  openProperties(): void {
    this.router.navigate(['all-properties']);
  }


  openPropertyBookings(): void {
    if(this.authServ.isAuthenticated()==false)
    {
        this.openSnackBar('Login to see booking !!');
    }
    else{
      this.router.navigate(['all-booking']);
    }
  }

  openNotification(): void {
    this.router.navigate(['notifications']);
  }

  openChatDialog() {
    this.dialog.open(ChatBotComponent,{
      width:'400px'
    })
    // this.dialog.open(ChatBotComponent, {
    //   width: '400px' // Adjust the size as needed
    // });
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

  private openSnackBar(msg:string): void {
    this.snackBar.open(msg,'Close',{
      duration: 3000
    });
  }
}
