import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginServiceService } from '../shared/services/login-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  // emailValue="namratathaker123@gmail.com"
  // passwordValue=""
  emailValue;
  passwordValue=new FormControl();
  resData;
  userEmail:string;
  constructor(private _loginService:LoginServiceService,private router:Router ) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.emailValue);
    console.log(this.passwordValue.value);
    this._loginService.getUser(this.emailValue,this.passwordValue.value).subscribe(data=>{
      this.resData=data;
      // this.router.navigate(['/doctor_dashboard',data.email])
      console.log(data);
    }).add(()=>{
      localStorage.setItem('token',this.resData.token);
      
      if(this.resData.isDoc){
      this.router.navigate(['/doctor',this.resData.id]);
      }else{
        this.router.navigate(['/patient',this.resData.id]);
        
      }
    });

    // setTimeout(()=>{
      // console.log(this.resData);

    // },3000)
    
  }

  onSubmit(){
    
  }
}
