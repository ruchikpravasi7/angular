import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
import {LoginServiceService} from '../../shared/services/login-service.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private _loginService:LoginServiceService) { }

  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    
  }

  goToDoctorsList(){
    this.router.navigate(['doctors'],{relativeTo:this.route});
  }

  logout(){
    this._loginService.logout();
    this.router.navigate(['/login']);
  }

}
