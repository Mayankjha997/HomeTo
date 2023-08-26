import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propertycards',
  templateUrl: './propertycards.component.html',
  styleUrls: ['./propertycards.component.css']
})
export class PropertycardsComponent {

  constructor(private router: Router){}

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
}
