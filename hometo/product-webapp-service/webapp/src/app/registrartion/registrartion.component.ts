// import { DialogRef } from '@angular/cdk/dialog';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Register } from '../models/register';
// import { RegisterService } from '../services/registration/register.service';

// @Component({
//   selector: 'app-registrartion',
//   templateUrl: './registrartion.component.html',
//   styleUrls: ['./registrartion.component.css']
// })
// export class RegistrartionComponent {
//   register: Register={}
//   registerationform: FormGroup;
//   constructor(private _fb: FormBuilder, private _registerservice: RegisterService, private _dialogref: DialogRef<RegistrartionComponent>) {
//     this.registerationform = this._fb.group({
//       email: ['', Validators.required],
//       password: ['', Validators.required],
//       role: ['', Validators.required],
//       number: ['', Validators.required],
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       address: ['', Validators.required],
//       dob: ['', Validators.required],
//     });
    
//   }
//   onFormSubmit() {
//     if (this.registerationform.valid) {
//       this.fillData()
//       this._registerservice.userRegister(this.register).subscribe({
//         next: (val: any) => {//define object
//           alert('Registration Complete');
//           this._dialogref.close();

//         },
//         error: (err: any) => {
//           console.error(err);
//         }
//       });
//     }
//   }
//   private fillData() {
//     this.register.email = this.registerationform.value.email
//     this.register.password = this.registerationform.value.password
//     this.register.role = this.registerationform.value.role
//     this.register.number = this.registerationform.value.number
//     this.register.firstName = this.registerationform.value.firstName
//     this.register.lastName = this.registerationform.value.lastName
//     this.register.address = this.registerationform.value.address
//     this.register.dob = this.registerationform.value.dob
//   }


// }


import { Component, OnInit } from '@angular/core';
// import { User } from '../models/register';
import { User } from '../models/User';
import { LoginService } from '../services/login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registrartion',
  templateUrl: './registrartion.component.html',
  styleUrls: ['./registrartion.component.css']
})
export class RegistrartionComponent implements OnInit{
  user: User = new User(); // Initialize an empty User object
  constructor(private snackBar: MatSnackBar, private userService: LoginService) {}

  ngOnInit(): void {}

  onRegister(): void {
    this.userService.register(this.user).subscribe(
      (response: any) => {
        console.log('Registration successful', response);
        this.openSnackBar('Registration successful. Login !!');
        // Clear the form after successful registration
        this.user = new User();
      },
      (error: any) => {
        console.error('Registration error. Try again !!', error);
      }
    );
  }

    private openSnackBar(msg: string) {
      this.snackBar.open(msg, 'Close', {
        duration: 5000
      })
    }

  }
