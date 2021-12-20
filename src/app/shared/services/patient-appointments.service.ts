import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { patientAppointmentInterface } from "../interface/patientAppointmentInterface";
import { patientAppointmentPrescriptionInterface } from '../interface/patientAppointmentPrescriptionInterface';

@Injectable({
  providedIn: 'root'
})
export class PatientAppointmentsService {

  constructor(private http:HttpClient) { }

  getAppointments():Observable<patientAppointmentInterface[]>{
    return this.http.get<patientAppointmentInterface[]>("http://localhost:3000/patient/appointments");
  }

  getPrescriptions(id):Observable<patientAppointmentPrescriptionInterface[]>{
    return this.http.get<patientAppointmentPrescriptionInterface[]>('http://localhost:3000/patient/'+id+'/prescription')
  }

  patchAppointment(id, value) {
    this.http
      .patch('http://localhost:3000/patient/appointments/' + id, value)
      .subscribe(
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
