import { Component, OnInit } from '@angular/core';
import { DoctorAppointmentsService } from '../../shared/services/doctor-appointments.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-doctor-appointment-detailsoperations-surgeries',
  templateUrl: './doctor-appointment-detailsoperations-surgeries.component.html',
  styleUrls: ['./doctor-appointment-detailsoperations-surgeries.component.css']
})
export class DoctorAppointmentDetailsoperationsSurgeriesComponent implements OnInit {

  appointment;

  constructor(private _doctorappointment:DoctorAppointmentsService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.parent.snapshot.paramMap.get('id1');    
    this._doctorappointment.getAppointment(id).subscribe((data)=>{
      this.appointment = data
    })
  }

}
