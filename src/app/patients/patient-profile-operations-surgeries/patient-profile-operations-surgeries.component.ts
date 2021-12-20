import { Component, OnInit } from '@angular/core';
import { PatientProfileService } from "../../shared/services/patient-profile.service";


@Component({
  selector: 'app-patient-profile-operations-surgeries',
  templateUrl: './patient-profile-operations-surgeries.component.html',
  styleUrls: ['./patient-profile-operations-surgeries.component.css']
})
export class PatientProfileOperationsSurgeriesComponent implements OnInit {

  PatientProfile:any;
  constructor(private _PatientProfileService:PatientProfileService) { }

  ngOnInit(): void {
    this._PatientProfileService.getPatientProfile().subscribe((data)=>{
      this.PatientProfile=data;
      console.log(data);
      
    })
  }

}
