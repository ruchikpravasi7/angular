import { Component, OnInit } from '@angular/core';
import { DoctorAppointmentsService } from '../../shared/services/doctor-appointments.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-appointment-add-prescription',
  templateUrl: './doctor-appointment-add-prescription.component.html',
  styleUrls: ['./doctor-appointment-add-prescription.component.css']
})
export class DoctorAppointmentAddPrescriptionComponent implements OnInit {

  prescriptions;
  constructor(private _doctorappointment: DoctorAppointmentsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.parent.snapshot.paramMap.get('id1');
    this._doctorappointment.getAllPrescription(id).subscribe((data)=>{
      this.prescriptions=data;
      console.log(data);
      
    });
  }

}
