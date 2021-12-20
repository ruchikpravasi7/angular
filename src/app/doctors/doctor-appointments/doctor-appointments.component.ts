import { Component, OnInit } from '@angular/core';
import { DoctorAppointmentsService } from '../../shared/services/doctor-appointments.service';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css']
})
export class DoctorAppointmentsComponent implements OnInit {
  public appointments:any[];
  completedVal:boolean
  constructor(private _doctorappointment:DoctorAppointmentsService,private router:Router,private route:ActivatedRoute) { }

  getA(){
    this._doctorappointment.getDoctorAppointment().subscribe((data)=>{
      // console.log(data);
      this.appointments = data
      // console.log('success');
      
    })
  }

  ngOnInit(): void {
    this.getA();
  }
  
  onValChange(value){
    this.completedVal=value;
  }

  pendingViewAppointment(id){
    // let id1 = this.route.parent.snapshot.paramMap.get('id');
    this.router.navigate([id],{relativeTo:this.route});
  }

  completedViewAppointment(id){
    this.router.navigate([id],{relativeTo:this.route});

  }
}
