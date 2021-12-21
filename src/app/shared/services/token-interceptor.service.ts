import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {LoginServiceService} from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req:any,next:any){
    // let authService=this.injector.get(LoginServiceService)
    // let tokenizedReq=req.clone({
    //   setHeaders:{
    //     Authorization:`Bearer ${authService.getToken()}`
    //   }
    // })
    return next.handle();
    // return next.handle(tokenizedReq)
  }
}
