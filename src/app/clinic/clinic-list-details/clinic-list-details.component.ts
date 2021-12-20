import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginServiceService } from "../../shared/services/login-service.service";
import { DoctorListDoctorDetailsService } from "../../shared/services/doctor-list-doctor-details.service"

@Component({
  selector: 'app-clinic-list-details',
  templateUrl: './clinic-list-details.component.html',
  styleUrls: ['./clinic-list-details.component.css']
})
export class ClinicListDetailsComponent implements OnInit {
  DoctorData:any;
  constructor(private _doctorListDetailService: DoctorListDoctorDetailsService,
    private route: ActivatedRoute,
    private router:Router,
    private _loginService:LoginServiceService,) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    
    this._doctorListDetailService.getDoctor(id).subscribe((data) => {
      this.DoctorData = data;
      console.log(data);
      
    });
    
  }
  goToDoctorsList(){
    this.router.navigate(['doctors'],{relativeTo:this.route});
  }
  previous(){
    this.router.navigate(['/clinics'])
  }

  
  bookAppointment(){
    if(this._loginService.loggedIn){
    this.router.navigate(['bookAppointment'],{relativeTo:this.route});
    }else{
      // alert('Please Login First...');
      this.router.navigate(['/login']);
    }
  }

}
