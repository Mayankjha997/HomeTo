import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  searchTerm: string ='';

  constructor(private router:Router){}

  onSearch() {
    const trimSearchTerm=this.searchTerm.trim();
    const lowerCaseTerm=trimSearchTerm.toLowerCase();
    if(lowerCaseTerm == "apartment" || lowerCaseTerm == "apartments")
    {
      this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(()=>this.router.navigate(['/property-type','Apartment']));
    }
    else if(lowerCaseTerm == "bungalow" || lowerCaseTerm == "bungalows" || lowerCaseTerm == "villa" || lowerCaseTerm == "bangla" || lowerCaseTerm == "bungla" || lowerCaseTerm == "banglow" || lowerCaseTerm == "banglows")
    {
      this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(()=>this.router.navigate(['/property-type','Bungalow']));
    }
    else if(lowerCaseTerm == "house" || lowerCaseTerm == "houses" || lowerCaseTerm == "home" || lowerCaseTerm == "homes")
    {
      this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(()=>this.router.navigate(['/property-type','House']));
    }
    else if(lowerCaseTerm == "flat" || lowerCaseTerm == "flats")
    {
      this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(()=>this.router.navigate(['/property-type','Flat']));
    }
    else if(lowerCaseTerm == "plot" || lowerCaseTerm == "plots" || lowerCaseTerm == "land" || lowerCaseTerm == "land for sale" || lowerCaseTerm == "lands for sale" || lowerCaseTerm == "plot for sale" || lowerCaseTerm == "plots for sale")
    {
      this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(()=>this.router.navigate(['/property-type','Plot']));
    }
    else if(lowerCaseTerm == "property" || lowerCaseTerm == "properties" || lowerCaseTerm == "all property" || lowerCaseTerm == "all properties" || lowerCaseTerm == "available property" || lowerCaseTerm == "available properties")
    {
      this.router.navigate(['all-properties']);
    }
    else
    {
      this.router.navigate(['page-not-found']);
    }
  }
}
