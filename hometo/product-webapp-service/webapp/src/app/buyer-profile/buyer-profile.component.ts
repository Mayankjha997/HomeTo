import { Component,OnInit} from '@angular/core';
import { Buyer } from '../buyer';
import { BuyerProfileService } from '../services/buyer/buyer-profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { LoginService } from '../services/login/login.service';
import { User } from '../models/User';
import { Observable } from 'rx';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})

export class BuyerProfileComponent implements OnInit{

  // private Integer userId;
  //   private String email;
  //   private String password;
  //   private String confirmPassword;
  //   private UserRole role;
  //   private String phoneNumber;
  //   private String name;

  email: string = this.authServ.getEmail();
  userDetails: User = new User;

  updateProfileForm!: FormGroup;
  constructor(private snackBar: MatSnackBar,private dialogRef:MatDialogRef<BuyerProfileComponent>, private authServ:LoginService, private formBuilder: FormBuilder){
    this.authServ.getUserByEmail(this.email).subscribe(
      (data:any)=>{
        this.userDetails=data; 
        console.log(this.userDetails);
        this.updateFormInit();
      },
      (error:any)=>{console.log(error);}
    );
  }

  updateFormInit(): void {
    this.updateProfileForm=this.formBuilder.group(
      {
        email: [this.userDetails.email, Validators.required],
        password: ['', [Validators.required,Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        role: [{value:this.userDetails.role,disabled:true}, Validators.required],
        phoneNumber: [this.userDetails.phoneNumber, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        name: [this.userDetails.name, Validators.required],
      }
    );
  }

  onNoClick(): void{
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
    
  }

  fillData() {
    // this.userDetails.email=this.updateProfileForm.value.name;
    this.userDetails.password=this.updateProfileForm.value.password;
    this.userDetails.confirmPassword=this.updateProfileForm.value.confirmPassword;
    // this.userDetails.role=this.updateProfileForm.value.role;
    this.userDetails.phoneNumber=this.updateProfileForm.value.phoneNumber;
    this.userDetails.name=this.updateProfileForm.value.name;
  }

  onSubmit(): void {
    this.fillData();
    this.authServ.updateUser(this.userDetails).subscribe({
      next: (val:any) => {
        this.openSnackBar('Profile Updated!!');
        this.dialogRef.close();
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000
    });
  }
}