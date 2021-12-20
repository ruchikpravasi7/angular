import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { doctorListInterface } from "../interface/doctorListInterface";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorsListService {
  private url1:string="http://localhost:3000/doctors"

  constructor(private http:HttpClient) { }
  
  getDoctors(city,speciality):Observable<doctorListInterface[]>{
    if(city && speciality){
      return this.http.get<doctorListInterface[]>("http://localhost:3000/doctors?city="+city+"&doctor_speciality="+speciality);
    }else if(city){
      return this.http.get<doctorListInterface[]>("http://localhost:3000/doctors?city="+city);
    }else{
      return this.http.get<doctorListInterface[]>(this.url1);
    }
  }

  getCityValue(cityValue){
    return this.http.get("http://localhost:3000/doctors?city=ahemdabad&doctor_speciality=dentist")
  }
}
