import { Component, OnInit } from '@angular/core';
import { PatientProfileService } from "../../shared/services/patient-profile.service";


@Component({
  selector: 'app-patient-profile-other-illness',
  templateUrl: './patient-profile-other-illness.component.html',
  styleUrls: ['./patient-profile-other-illness.component.css']
})
export class PatientProfileOtherIllnessComponent implements OnInit {

  PatientProfile:any;
  constructor(private _PatientProfileService:PatientProfileService) { }

  ngOnInit(): void {
    this._PatientProfileService.getPatientProfile().subscribe((data)=>{
      this.PatientProfile=data;
      console.log(data);
      
    })
  }

}
