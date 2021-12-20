import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { ClinicListService } from '../../shared/services/clinic-list.service';
import {Router,ActivatedRoute, ParamMap} from '@angular/router';
import { LoginServiceService } from "../../shared/services/login-service.service";

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.css']
})
export class ClinicListComponent implements OnInit {
  public clinics:any[]
  navDisable=this._loginService.loggedIn();

  constructor(private cliniclist: ClinicListService, private router:Router,private route :ActivatedRoute,private _loginService:LoginServiceService)  {

   }
   getclinicsbydocid(Doctor_Id){     
    this.router.navigate(['clinics',Doctor_Id])
   }


  ngOnInit(): void {
    this.cliniclist.getAllClinics().subscribe((data)=>{
      this.clinics= data;
      console.log(data)
    })
  }

  doctorBookAppointment(id){
    // this.router.navigate(['/doctors'],{ relativeTo: this.route })
    this.router.navigate(['doctors',id],{ relativeTo: this.route });
    
    // this.router.navigate([id],{ relativeTo: this.route })  
    // this.router.navigate(['bookAppointment',id],{relativeTo:this.route})
  }


}
