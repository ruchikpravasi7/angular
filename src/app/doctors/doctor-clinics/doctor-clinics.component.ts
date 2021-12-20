import { Component, OnInit } from '@angular/core';
import { DoctorCLinicsService } from '../../shared/services/doctor-clinics.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-clinics',
  templateUrl: './doctor-clinics.component.html',
  styleUrls: ['./doctor-clinics.component.css'],
})
export class DoctorClinicsComponent implements OnInit {
  clinicsData: any[];
  clinic_name;
  clinic_timing;
  area;
  city;
  state;
  country;
  addClinicFlag: boolean = false;

  constructor(
    private _DoctorCLinicsService: DoctorCLinicsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._DoctorCLinicsService.getClinics().subscribe(
      (data) => {
        this.clinicsData = data;
      }

      // res=>this.clinicsData=res
    );
    // .add(
    //   console.log(this.clinicsData)

    // )
  }
  add() {
    this.addClinicFlag = true;
    // this.router.navigate(['add'],{relativeTo:this.route});
  }

  addClinic(){
    const temp={
      "clinic_name":this.clinic_name,
      "clinic_timing":this.clinic_timing,
      "clinic_address":{
        "area":this.area,
        "city":this.city,
        "state":this.state,
        "country":this.country
      }
    }
    this._DoctorCLinicsService.addClinic(temp);
    // console.log(temp);
    
    this.addClinicFlag=false;
    let id = this.route.parent.snapshot.paramMap.get('id');    
    this.router.navigate(['/doctor/'+id+'/clinics']);
  }

  goBack(){
    let id = this.route.parent.snapshot.paramMap.get('id');    
    this.router.navigate(['/doctor/'+id+'/clinics']);
  }
}
