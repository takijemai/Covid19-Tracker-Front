import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASEURL = 'http://localhost:3000/api/covidapp';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  RegisterUser(name:string,email:string,password:string): Observable<any> {
    return this.http.post(`${BASEURL}/signup`, {name,email,password});
  }

  loginUser(email:string,password:string): Observable<any> {

    return this.http.post(`${BASEURL}/login`, {email,password});
  }



}
