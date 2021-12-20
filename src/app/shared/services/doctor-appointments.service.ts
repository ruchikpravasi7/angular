import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { doctorAppointmentAddPrescriptionInterface } from '../interface/doctorAppointmentAddPrescriptionInterface';
import { doctorAppointmentInterface } from '../interface/doctorAppointmentInterface';

@Injectable({
  providedIn: 'root',
})
export class DoctorAppointmentsService {
  constructor(private http: HttpClient) {}

  getDoctorAppointment(): Observable<doctorAppointmentInterface[]> {
    return this.http.get<doctorAppointmentInterface[]>(
      'http://localhost:3000/doctor/appointments'
    );
  }

  getAppointment(id) {
    return this.http.get<doctorAppointmentInterface>(
      'http://localhost:3000/doctor/appointments/' + id
    );
  }

  patchAppointment(id, value) {
    this.http
      .patch('http://localhost:3000/doctor/appointments/' + id, value)
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

  deleteAppointment(id) {
    this.http
      .delete('http://localhost:3000/doctor/appointments/' + id)
      .subscribe(
        (res) => {
          console.log('received ok response from delete request');
        },
        (error) => {
          console.error('There was an error during the delete request');
          console.log(error);
        }
      );
  }

  addPrescription(id, temp) {
    
    this.http
      .post('http://localhost:3000/doctor/' + id + '/add_prescription', temp)
      .subscribe(
        (res) => {
          console.log('received ok response from put request');
        },
        (error) => {
          console.error('There was an error during the put request');
          console.log(error);
        }
      );
  }

  getAllPrescription(id): Observable<doctorAppointmentAddPrescriptionInterface[]> {
    return this.http.get<doctorAppointmentAddPrescriptionInterface[]>(
      'http://localhost:3000/doctor/appointments/' + id + '/prescription'
    );
  }
}
