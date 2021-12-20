import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { clinicListInterface } from "../interface/clinicListInterface";

@Injectable({
  providedIn: 'root'
})
export class ClinicListService {
    
  private url1:string="http://localhost:3000/clinics"

getAllClinics():Observable<clinicListInterface[]>{
  return this.http.get<clinicListInterface[]>("http://localhost:3000/clinics");
}
 
  constructor(private http:HttpClient) { }
}
