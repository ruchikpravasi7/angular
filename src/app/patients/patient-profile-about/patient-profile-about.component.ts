import { Component, OnInit } from '@angular/core';
import { PatientProfileService } from "../../shared/services/patient-profile.service";

@Component({
  selector: 'app-patient-profile-about',
  templateUrl: './patient-profile-about.component.html',
  styleUrls: ['./patient-profile-about.component.css']
})
export class PatientProfileAboutComponent implements OnInit {

  PatientProfile:any;
  constructor(private _PatientProfileService:PatientProfileService) { }

  ngOnInit(): void {
    this._PatientProfileService.getPatientProfile().subscribe((data)=>{
      this.PatientProfile=data;
      console.log(data);
      
    })
  }

}
