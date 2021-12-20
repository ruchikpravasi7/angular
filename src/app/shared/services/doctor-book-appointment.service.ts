import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DoctorBookAppointmentService {

  constructor(private http:HttpClient,private route: ActivatedRoute,) { }

  bookAppointment(time,date,id1):Observable<any>{
    // let id = this.route.snapshot.paramMap.get('id');
    // let id1 = this.route.snapshot.paramMap.get('id1');
    return this.http.post('http://localhost:3000/doctor/'+id1+'/book_appointment',{'time':time,'date':date});
  }
}
