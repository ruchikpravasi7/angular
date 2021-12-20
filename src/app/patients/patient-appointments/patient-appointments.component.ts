import { Component, OnInit } from '@angular/core';
import { PatientAppointmentsService } from '../../shared/services/patient-appointments.service';
import {Router,ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css'],
})
export class PatientAppointmentsComponent implements OnInit {
  appointments: any;
  completedVal: boolean;
  appointment;
  date;
  time;
  amORpm;
  resFlag = false;
  temp_id;
  constructor(
    private _PatientAppointmentsService: PatientAppointmentsService,
    private route:ActivatedRoute,
    private router:Router
  ) {}

  getA() {
    this._PatientAppointmentsService.getAppointments().subscribe((data) => {
      this.appointments = data;
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.getA();
  }

  onValChange(value) {
    // this.ngOnInit();
    // this.getA();
    this.completedVal = value;
  }

  viewPres(id){
    console.log(id);
    
    this.router.navigate([id],{relativeTo:this.route});
  }
  reschedule() {
    let id = this.route.parent.snapshot.paramMap.get('id');
    const temp = {
      date: this.date,
      time: this.time + ' ' + this.amORpm,
    };

    this._PatientAppointmentsService.patchAppointment(this.temp_id, temp);
    this.resFlag = false;

    this.router.navigate(['/patient/'+ id + "/appointments"])
    
  }
  onReschedule(id) {
    this.temp_id = id;
    this.resFlag = true;
  }
  OnDateChange(value) {
    var d = new Date(value)
    var month = d.getUTCMonth() + 1; //months from 1-12
var day = d.getUTCDate() + 2;
var year = d.getUTCFullYear();
var newdate = year + "/" + month + "/" + day;
    //this.date = d.toLocaleString();
    this.date = newdate
    console.log(this.date)
  }

  getTime(value) {
    // console.log(value);

    this.amORpm = value;
  }
}
