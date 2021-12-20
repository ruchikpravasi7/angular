import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginServiceService} from '../../shared/services/login-service.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute, private _loginService:LoginServiceService) { }

  ngOnInit(): void {
  }

  goToAppointments(){
    this.router.navigate(['appointments'],{relativeTo:this.route})
    
  }

  goToClinics(){
    this.router.navigate(['clinics'],{relativeTo:this.route})
  }

  logout(){
    this._loginService.logout();
  }

  goToMyProfile(){
    this.router.navigate(['myProfile'],{relativeTo:this.route})
  }
}
