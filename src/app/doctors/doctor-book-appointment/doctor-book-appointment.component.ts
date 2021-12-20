import { Component, OnInit } from '@angular/core';
import { DoctorListDoctorDetailsService } from "../../shared/services/doctor-list-doctor-details.service";
import { ActivatedRoute,Router } from "@angular/router";
import { DoctorBookAppointmentService } from "../../shared/services/doctor-book-appointment.service";

@Component({
  selector: 'app-doctor-book-appointment',
  templateUrl: './doctor-book-appointment.component.html',
  styleUrls: ['./doctor-book-appointment.component.css']
})
export class DoctorBookAppointmentComponent implements OnInit {

  DoctorData:any;

  returnData;

  time:string;
  date:any;
  amORpm:string;

  minDate = new Date();

  constructor(private _doctorListDetailService:DoctorListDoctorDetailsService,private route:ActivatedRoute,private _doctorBookAppointmentService:DoctorBookAppointmentService,private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id1');
    let id2 = this.route.snapshot.paramMap.get('id2');

    if(id){
      this._doctorListDetailService.getDoctor(id).subscribe((data) => {
        this.DoctorData = data;
      });      
    }else{
      this._doctorListDetailService.getDoctor(id2).subscribe((data) => {
        this.DoctorData = data;
      }); 
    }
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  }

  bookAppointment(){
    let id = this.route.snapshot.paramMap.get('id1');
    let id2 = this.route.snapshot.paramMap.get('id2');

    // console.log(this.amORpm);
    if(id){
      this._doctorBookAppointmentService.bookAppointment(this.time+" "+this.amORpm,this.date,id).subscribe((data)=>{
        console.log(data);
      })
    }else{
      this._doctorBookAppointmentService.bookAppointment(this.time+" "+this.amORpm,this.date,id2).subscribe((data)=>{
        console.log(data);
      })
  
      
    }
    let id3 = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/patient/'+ id3 + "/appointments"])
  }

  OnDateChange(value){
    var d = new Date(value)
    var month = d.getUTCMonth() + 1; //months from 1-12
var day = d.getUTCDate() + 2;
var year = d.getUTCFullYear();
var newdate = year + "/" + month + "/" + day;
    //this.date = d.toLocaleString();
    this.date = newdate
  }

  getTime(value){
    // console.log(value);
    
    this.amORpm=value;
  }

  goBack(){
  
    let id = this.route.parent.snapshot.paramMap.get('id');
    let id2 = this.route.snapshot.paramMap.get('id2');

    if(id2){
      this.router.navigate(['/patient/'+id+'/clinics']);
    }else{
    // console.log(id);

    
    
    this.router.navigate(['/patient/'+id+'/doctors']);
    }
  }
}
