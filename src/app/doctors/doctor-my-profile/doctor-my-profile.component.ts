import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorMyProfileService } from "../../shared/services/doctor-my-profile.service";

@Component({
  selector: 'app-doctor-my-profile',
  templateUrl: './doctor-my-profile.component.html',
  styleUrls: ['./doctor-my-profile.component.css'],
})
export class DoctorMyProfileComponent implements OnInit {
  DoctorProfile
  constructor(private router: Router, private route: ActivatedRoute,private _DoctorMyProfileService:DoctorMyProfileService) {}

  ngOnInit(): void {
    this._DoctorMyProfileService.getDoctorProfile().subscribe((data)=>{
      this.DoctorProfile=data;
      console.log(data);
      
    })
  }

  doctorProfileEdit(id){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

}
