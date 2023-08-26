import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef } from '@angular/material/dialog';
import { PropertyService } from '../services/property.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Property {
  propertyName:string;
  propertyType:string;
  address:string;
  description:string;
  amenities:string;
  price:number;
}

@Component({
  selector: 'app-add-property-form',
  templateUrl: './add-property-form.component.html',
  styleUrls: ['./add-property-form.component.css']
})
export class AddPropertyFormComponent {

  newProperty:Property = {
    propertyName:'',
    propertyType:'',
    address:'',
    description:'',
    amenities:'',
    price:0,
  }

  addPropertyForm: FormGroup;

  constructor(private snackBar: MatSnackBar,private http: HttpClient, private formBuilder: FormBuilder,private dialogRef: MatDialogRef<AddPropertyFormComponent>, private propertyServ: PropertyService){
    this.addPropertyForm = this.formBuilder.group({
       propertyName: ['', Validators.required],
       propertyType: ['', Validators.required],
       address: ['', Validators.required],
       description: ['', Validators.required],
       amenities: ['', Validators.required],
       price: ['', Validators.required]
     });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  fillData() {
    this.newProperty.propertyName=this.addPropertyForm.value.propertyName;
    this.newProperty.propertyType=this.addPropertyForm.value.propertyType;
    this.newProperty.address=this.addPropertyForm.value.address;
    this.newProperty.description=this.addPropertyForm.value.description;
    this.newProperty.amenities=this.addPropertyForm.value.amenities;
    this.newProperty.price=this.addPropertyForm.value.price;
  }
  
  onSubmit() {
    if (this.addPropertyForm.valid) {
      this.fillData();
      this.propertyServ.addProperty(this.newProperty).subscribe({
        next: (val: any) => {
          // alert('Property added');
          window.location.reload();
          this.openSnackBar('Property added :)')
          this.dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000
    });
  }
}
