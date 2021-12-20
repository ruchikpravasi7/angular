import { Component, OnInit } from '@angular/core';
import { DoctorListDoctorDetailsService } from '../../shared/services/doctor-list-doctor-details.service';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginServiceService } from "../../shared/services/login-service.service";

@Component({
  selector: 'app-doctor-list-doctor-details',
  templateUrl: './doctor-list-doctor-details.component.html',
  styleUrls: ['./doctor-list-doctor-details.component.css'],
})

export class DoctorListDoctorDetailsComponent implements OnInit {
   DoctorData:any;
  constructor(
    private _doctorListDetailService: DoctorListDoctorDetailsService,
    private route: ActivatedRoute,
    private router:Router,
    private _loginService:LoginServiceService,
  ) {}

  ngOnInit(): void {
    // console.log("success");
    let id = this.route.snapshot.paramMap.get('id');
    
    this._doctorListDetailService.getDoctor(id).subscribe((data) => {
      this.DoctorData = data;
    });
  }

  bookAppointment(){
    if(this._loginService.loggedIn){
    this.router.navigate(['bookAppointment'],{relativeTo:this.route});
    }else{
      // alert('Please Login First...');
      this.router.navigate(['/login']);
    }
  }

  previous(){
    this.router.navigate(['/doctors'])
  }
}
