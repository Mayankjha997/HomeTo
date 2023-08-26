import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/models/login';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL = 'http://localhost:1001/HomeTo';

  private isLoggedIn = false;

  constructor(private http: HttpClient,private router: Router) { }

  storeUserData(userData: any): void {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  getUserData(): any {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token'); 
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseURL}/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseURL}/login`, user);
  }

  getUserByEmail(email: any): Observable<any> {
    return this.http.get(`${this.baseURL}/getUserByEmail/${email}`);
  }

  updateUser(user: any): Observable<any>{
    return this.http.put(`${this.baseURL}/updateUser`,user);
  }

  setUserEmail(email:any): void {
    localStorage.setItem('email',email);
  }

  getEmail(): any{
    return localStorage.getItem('email');
  }

  setUserId(userId:any): void {
    localStorage.setItem('userId',userId);
  }

  getUserId(): any{
    return localStorage.getItem('userId');
  }

  setUserRole(role:any): void{
    localStorage.setItem('role',role);
  }

  getRole(): any{
    return localStorage.getItem('role');
  }

  setIsAuthenticated(): void{
    localStorage.setItem('authenticated','true');
  }

  isAuthenticated(): boolean{
    return this.isLoggedIn=localStorage.getItem('authenticated')==='true'?true:false;
  }

  

  logout(): void{
    localStorage.removeItem('authenticated');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    this.router.navigate(['home']);
  }
}
