import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { patientProfileInterface } from '../interface/patientProfileInterface';

@Injectable({
  providedIn: 'root'
})
export class PatientProfileService {

  constructor(private http:HttpClient) { }

  getPatientProfile():Observable<patientProfileInterface[]>{
    return this.http.get<patientProfileInterface[]>('http://localhost:3000/patient/profile');
  }

  postPatientProfile(patientProfile){
    this.http.patch('http://localhost:3000/patient/profile',patientProfile).subscribe(
      res => { 
        console.log('received ok response from patch request');
      },
      error => {
        console.error('There was an error during the request');
        console.log(error);
      });
  }
}
