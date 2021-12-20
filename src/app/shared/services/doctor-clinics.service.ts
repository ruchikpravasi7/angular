import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { doctorClinicsInterface } from '../interface/doctorClinicsInterface';

@Injectable({
  providedIn: 'root'
})
export class DoctorCLinicsService {

  constructor(private http:HttpClient) { }

  getClinics():Observable<doctorClinicsInterface[]>{
    return this.http.get<doctorClinicsInterface[]>('http://localhost:3000/doctor/clinics');
  }

  addClinic(clinic){
    this.http.post('http://localhost:3000/doctor/clinic/add',clinic).subscribe(
      (res) => {
        console.log('received ok response from post request');
      },
      (error) => {
        console.error('There was an error during the post request');
        console.log(error);
      }
    );
  }
}
