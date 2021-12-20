import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {doctorListDoctorDetailsInterface} from '../interface/doctorListDoctorDetailsInterface';

@Injectable({
  providedIn: 'root'
})
export class DoctorListDoctorDetailsService {

  constructor(private http:HttpClient) { }

  getDoctor(id):Observable<doctorListDoctorDetailsInterface[]>{
    return this.http.get<doctorListDoctorDetailsInterface[]>("http://localhost:3000/doctor/"+ id );
  }
}
