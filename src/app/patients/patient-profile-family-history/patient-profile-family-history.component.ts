import { Component, OnInit } from '@angular/core';
import { PatientProfileService } from "../../shared/services/patient-profile.service";


@Component({
  selector: 'app-patient-profile-family-history',
  templateUrl: './patient-profile-family-history.component.html',
  styleUrls: ['./patient-profile-family-history.component.css']
})
export class PatientProfileFamilyHistoryComponent implements OnInit {

  PatientProfile:any;
  constructor(private _PatientProfileService:PatientProfileService) { }

  ngOnInit(): void {
    this._PatientProfileService.getPatientProfile().subscribe((data)=>{
      this.PatientProfile=data;
      console.log(data);
      
    })
  }
}
