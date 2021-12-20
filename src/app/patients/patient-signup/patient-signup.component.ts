import { Component, OnInit } from '@angular/core';
import { SignUpService } from "../../shared/services/sign-up.service";


@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {
  fullName:string;
  email:string;
  password:string;
  constructor(private signupService:SignUpService) { }

  ngOnInit(): void {
  }

  signup(){
    const temp={
      "name":this.fullName,
      "email":this.email,
      "password":this.password,
    }
    console.log(temp);
    
    this.signupService.postPatient(temp);
  }
}
