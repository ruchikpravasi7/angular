import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { PatientProfileService } from "../../shared/services/patient-profile.service";

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  PatientProfile:any;
  constructor(private _PatientProfileService:PatientProfileService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this._PatientProfileService.getPatientProfile().subscribe((data)=>{
      this.PatientProfile=data;
      console.log(data);
      
    })
  }

  patientProfileEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  
  // ngOnInit(): void {
  //   // let id = this.route.parent.snapshot.paramMap.get('id');
    
  // }

  onValChange(value){
    this.router.navigate([value],{relativeTo:this.route});
  }
}
