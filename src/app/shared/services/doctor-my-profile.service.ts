import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DoctorMyProfileInterface } from '../interface/doctorMyProfileInterface';

@Injectable({
  providedIn: 'root'
})
export class DoctorMyProfileService {

  constructor(private http:HttpClient) { }

  getDoctorProfile():Observable<DoctorMyProfileInterface>{
    return this.http.get<DoctorMyProfileInterface>('http://localhost:3000/Myprofile');
  }

  updateDoctorProfile(user){
    this.http.patch('http://localhost:3000/doctor/profile',user).subscribe(
      (res) => {
        console.log('received ok response from patch request');
      },
      (error) => {
        console.error('There was an error during the request');
        console.log(error);
      }
    );
  }
}
