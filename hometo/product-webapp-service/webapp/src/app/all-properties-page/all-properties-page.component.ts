import { ChangeDetectorRef, Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Property } from '../models/property';
import { PropertyService } from '../services/property.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddPropertyFormComponent } from '../add-property-form/add-property-form.component';
import { UpdatePropertyFormComponent } from '../update-property-form/update-property-form.component';
import { LoginService } from '../services/login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-properties-page',
  templateUrl: './all-properties-page.component.html',
  styleUrls: ['./all-properties-page.component.css']
})
export class AllPropertiesPageComponent implements OnInit{

  
  properties:Property[]=[];

  constructor(private snackBar: MatSnackBar,private authServ: LoginService, private dialog:MatDialog, private propertyServ:PropertyService, private router:Router){}

  ngOnInit():void {
    this.propertyServ.getProperties().subscribe((data)=>{
      this.properties=data;
    })
  }

  openAddPropertyForm():void {
    this.dialog.open(AddPropertyFormComponent);
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
        this.openSnackBar("Deleted successfully !!");
      },
      (error: any) => {
        this.openSnackBar('Error deleting property !!')
        console.error('Error deleting property : ',error);
      }
    );
  }

  openViewPropertyComponent(property: Property,propertyID:string): void {
    // this.propertyServ.setPropertyData(property);
    this.router.navigate(['property',propertyID]);
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

  private openSnackBar(msg: string): void{
    this.snackBar.open(msg,'Close', {
      duration: 3000
    });
  }
  
}
