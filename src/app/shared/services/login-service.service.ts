import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginInterface } from '../interface/loginInterface';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient,private router:Router) {}

  getUser(email, password): Observable<LoginInterface[]> {
    return this.http.post<LoginInterface[]>('http://localhost:3000/login', {
      email,
      password,
    });
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/home'])
  }
}
