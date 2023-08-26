import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PropertyService } from '../services/property.service';
import { Property } from '../models/property';
import { ActivatedRoute, Router } from '@angular/router'; 
import { share } from 'rxjs-compat/operator/share';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-property-form',
  templateUrl: './update-property-form.component.html',
  styleUrls: ['./update-property-form.component.css']
})
export class UpdatePropertyFormComponent {

  sharedPropertyData:Property=this.propertyServ.getPropertyData();

  updatePropertyForm: FormGroup;

  constructor(private snackBar: MatSnackBar,private formBuilder: FormBuilder,private dialogRef: MatDialogRef<UpdatePropertyFormComponent>,private propertyServ:PropertyService){
    this.updatePropertyForm = this.formBuilder.group({
      propertyName: [this.sharedPropertyData.propertyName, Validators.required],
      propertyType: [this.sharedPropertyData.propertyType, Validators.required],
      address: [this.sharedPropertyData.address, Validators.required],
      description: [this.sharedPropertyData.description, Validators.required],
      amenities: [this.sharedPropertyData.amenities, Validators.required],
      price: [this.sharedPropertyData.price, Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  fillData() {
    this.sharedPropertyData.propertyName=this.updatePropertyForm.value.propertyName;
    this.sharedPropertyData.propertyType=this.updatePropertyForm.value.propertyType;
    this.sharedPropertyData.address=this.updatePropertyForm.value.address;
    this.sharedPropertyData.description=this.updatePropertyForm.value.description;
    this.sharedPropertyData.amenities=this.updatePropertyForm.value.amenities;
    this.sharedPropertyData.price=this.updatePropertyForm.value.price;
  }

  onSubmit() {
    if (this.updatePropertyForm.valid) {
      this.fillData();
      this.propertyServ.updateProperty(this.sharedPropertyData.propertyID,this.sharedPropertyData).subscribe({
        next: (val: any) => {
          // alert('Property updated');
          this.openSnackBar('Property updated successfully!!')
          this.dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }
  }

  private openSnackBar(message: string){
    this.snackBar.open(message, 'Close',{
      duration: 3000
    });
  }
}
