import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorMyProfileService } from '../../shared/services/doctor-my-profile.service';

@Component({
  selector: 'app-doctor-my-profile-edit',
  templateUrl: './doctor-my-profile-edit.component.html',
  styleUrls: ['./doctor-my-profile-edit.component.css'],
})
export class DoctorMyProfileEditComponent implements OnInit {
  DoctorProfile;
  doctor_name;
  doctor_email;
  doctor_contact_no;
  doctor_speciality;
  doctor_gender;
  doctor_education;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _DoctorMyProfileService: DoctorMyProfileService
  ) {}

  ngOnInit(): void {
    this.getDoctorProfile();
  }

  getDoctorProfile(){
    this._DoctorMyProfileService.getDoctorProfile().subscribe((data)=>{
      this.DoctorProfile=data;
      console.log(data);
      
    }).add(()=>{
      this.doctor_name=this.DoctorProfile.doctor_name;
      this.doctor_email=this.DoctorProfile.doctor_email;
      this.doctor_contact_no=this.DoctorProfile.doctor_contact_no;
      this.doctor_speciality=this.DoctorProfile.doctor_speciality;
      this.doctor_gender=this.DoctorProfile.doctor_gender;
      this.doctor_education=this.DoctorProfile.doctor_education;
    })
  }

  goBack(){
    let id = this.route.parent.snapshot.paramMap.get('id');
    this.router.navigate(['doctor/'+id+'/myProfile']);
  }

  updatePersonalDetails() {
    const temp = {
      doctor_contact_no: this.doctor_contact_no,
      doctor_speciality: this.doctor_speciality,
      doctor_gender: this.doctor_gender,
      doctor_education: this.doctor_education,
    };
        
    this._DoctorMyProfileService.updateDoctorProfile(temp);
    this.getDoctorProfile();

    let id = this.route.parent.snapshot.paramMap.get('id');
    this.router.navigate(['doctor/'+id+'/myProfile']);
  }
}
