import { Component, OnInit } from '@angular/core';
import {DoctorsListService} from '../../shared/services/doctors-list.service';
import {Router,ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { LoginServiceService } from "../../shared/services/login-service.service";

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  public doctors:any[]
  private city:string;
  private speciality:string;

   navDisable=this._loginService.loggedIn();

  constructor(private _doctorList:DoctorsListService,private router:Router,private route :ActivatedRoute,private _loginService:LoginServiceService) {
    this.myControl.setValue('ahmedabad');
    this.city='ahmedabad'
    this.getDoctorsList();
   }
  matAutocomplete: MatAutocomplete;

  myControl = new FormControl();
  myControl2= new FormControl();

  options: string[] = ['ahmedabad','vadodara','Mumbai', 'pune'];
  options2:string[]=['dentist','surgeon', 'cardiologist'];
  filteredOptions: Observable<string[]>;
  filteredOptions2: Observable<string[]>;

  getDoctorsList(){
    this._doctorList.getDoctors(this.city,this.speciality).subscribe((data)=>{
      this.doctors=data;
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.getDoctorsList();
    
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.filteredOptions2=this.myControl2.valueChanges.pipe(
      startWith(''),
      map(value=>this._filter2(value))
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filter2(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options2.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  getPosts(value){
    // this._doctorList.getCityValue(value)
    this.city=value;
    this.getDoctorsList();
  }

  getPosts2(value){
    this.speciality=value;
    this.getDoctorsList();
    
  }

  chooseFirstOption(){
    // this.matAutocomplete.options.first.select();
  }

  viewDoctorDetail(id){
    //if(!this._loginService.loggedIn){
    this.router.navigate(['/doctors',id]);
    this.router.navigate([id],{ relativeTo: this.route })  
    //}
    // else{
      
    // } 
  }

  doctorBookAppointment(id){
    this.router.navigate(['/doctors',id]);
    this.router.navigate([id],{ relativeTo: this.route })  
    // this.router.navigate(['bookAppointment',id],{relativeTo:this.route})
  }
}