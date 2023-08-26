import { Injectable } from '@angular/core';
// import { Register } from 'src/app/models/register';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }
  // userRegister(register : Register) : Observable<any>{
    userRegister(register : User) : Observable<any>{
    return this.http.post('http://localhost:1001/HomeTo/register' , register)
}
}
