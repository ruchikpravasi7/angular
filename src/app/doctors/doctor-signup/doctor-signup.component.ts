import { Component, OnInit } from '@angular/core';
import { SignUpService } from "../../shared/services/sign-up.service";

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})
export class DoctorSignupComponent implements OnInit {
  fullName:string;
  email:string;
  speciality:string;
  password:string;
  constructor(private signupService:SignUpService) { }

  ngOnInit(): void {
    
  }

  signup(){
    const temp={
      "name":this.fullName,
      "email":this.email,
      "password":this.password,
      "doctor_speciality":this.speciality
    }
    console.log(temp);
    
    this.signupService.postDoctor(temp);
  }


}
