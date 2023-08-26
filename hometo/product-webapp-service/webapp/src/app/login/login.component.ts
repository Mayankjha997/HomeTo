import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { LoginService } from '../services/login/login.service';
import { User } from '../models/User';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Login = {
    email: '',
    password: '',
  }
  loginError: string = '';
  role: string = '';
  getUserDetails: any;

  constructor(private snackBar: MatSnackBar,private authService: LoginService, private router: Router) { }

  ngOnInit(): void { }



  onLogin() {
    this.authService.login(this.user).subscribe(
      (data: any) => {
        if (data && data.token) { // Check for 'token' property
          this.authService.storeToken(data.token);
          console.log("Login Successful");
          this.openSnackBar("Login Successful");
          this.authService.setUserEmail(this.user.email);
          this.authService.getUserByEmail(this.user.email).subscribe(
            (data:any) => {
              this.getUserDetails=data;
              this.authService.setUserRole(this.getUserDetails.role);
              this.authService.setUserId(this.getUserDetails.userId);
            },
            // (error: any) => {
            //   console.error('Error fetching user: ', error);
            // }
          );

          this.authService.setIsAuthenticated();
          this.router.navigate(['/home'], { queryParams: { email: this.user.email } });
        } else {
          console.error('Login response structure is incorrect:', data);
          this.loginError = "Login failed. Please check your credentials !!";
          this.openSnackBar(this.loginError);
        }
      },
      (error: any) => {
        this.loginError = "Login failed. Unexpected response from the server.";
      }
    );
  }
  
  private openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000
    });
  }
  
}
