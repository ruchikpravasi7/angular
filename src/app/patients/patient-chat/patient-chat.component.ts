import { Component, OnInit } from '@angular/core';
import { PatientAppointmentsService } from '../../shared/services/patient-appointments.service';
import {Router,ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-patient-chat',
  templateUrl: './patient-chat.component.html',
  styleUrls: ['./patient-chat.component.css']
})
export class PatientChatComponent implements OnInit {
  appointments: any;

  constructor(
    private _PatientAppointmentsService: PatientAppointmentsService,
    private route:ActivatedRoute,
    private router:Router
  ) { }
  
  getA() {
    this._PatientAppointmentsService.getAppointments().subscribe((data) => {
      this.appointments = data;
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.getA();
  }

}
