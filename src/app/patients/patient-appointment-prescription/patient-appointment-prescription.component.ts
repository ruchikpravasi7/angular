import { Component, OnInit } from '@angular/core';
import { PatientAppointmentsService } from "../../shared/services/patient-appointments.service";
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-patient-appointment-prescription',
  templateUrl: './patient-appointment-prescription.component.html',
  styleUrls: ['./patient-appointment-prescription.component.css']
})
export class PatientAppointmentPrescriptionComponent implements OnInit {

  prescriptions:any
  constructor(private _PatientAppointmentsService:PatientAppointmentsService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id3');

    this._PatientAppointmentsService.getPrescriptions(id).subscribe((data)=>{
      this.prescriptions=data;
      console.log(data);
      
    });
  }

  goBack(){
    let id = this.route.parent.snapshot.paramMap.get('id');
    this.router.navigate(['/patient/'+id+'/appointments']);
  }
}
