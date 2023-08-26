import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../services/property.service';
import { Property } from '../models/property';
import { LoginService } from '../services/login/login.service';
import { UpdatePropertyFormComponent } from '../update-property-form/update-property-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-property-category-page',
  templateUrl: './property-category-page.component.html',
  styleUrls: ['./property-category-page.component.css']
})
export class PropertyCategoryPageComponent implements OnInit{

  propertyType:any='Flat';
  properties:Property[]=[];

  constructor(private snackBar: MatSnackBar,private dialog:MatDialog, private authServ: LoginService,private route: ActivatedRoute, private router:Router , private propertyServ: PropertyService){}

  ngOnInit(): void{
    this.propertyType=this.route.snapshot.paramMap.get('propertyType');
    this.propertyServ.getPropertiesByType(this.propertyType).subscribe((data) => {
      this.properties=data;
    });
  }

  openViewPropertyComponent(property: Property,propertyID:string): void {
    this.propertyServ.setPropertyData(property);
    this.router.navigate(['property',propertyID]);
  }

  openUpdatePropertyForm(property:Property):void {
    this.propertyServ.setPropertyData(property);
    this.dialog.open(UpdatePropertyFormComponent);
  }

  delete(propertyID: string):any{
    this.propertyServ.deleteProperty(propertyID).subscribe(
      (response: any) => {
        console.log(response);
        window.location.reload();
        this.openSnackBar('Deleted successfully !!');
      },
      (error: any) => {
        console.error('Error deleting property : ',error);
        this.openSnackBar('Error deleting property !!');
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

  private openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000
    });
  }
}
