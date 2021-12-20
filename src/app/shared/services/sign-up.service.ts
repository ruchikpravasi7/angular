import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }

  postPatient(user){
    this.http.post('http://localhost:3000/patient/signup',user).subscribe(
      res => { 
        console.log('received ok response from post patient request');
      },
      error => {
        console.error('There was an error during the request');
        console.log(error);
      });
  }

  postDoctor(user){
    this.http.post('http://localhost:3000/doctor/signup',user).subscribe(
      res => { 
        console.log('received ok response from doctor post request');
      },
      error => {
        console.error('There was an error during the request');
        console.log(error);
      });
  }
}
