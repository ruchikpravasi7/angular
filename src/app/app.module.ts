import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { DoctorListComponent } from './doctors/doctor-list/doctor-list.component';
import { LoginComponent } from './login/login.component';
import { DoctorSignupComponent } from './doctors/doctor-signup/doctor-signup.component';
import { ClinicListComponent } from './clinic/clinic-list/clinic-list.component';

import { MaterialModule } from './material-module';
import { MaterialComponentsModule } from './material-component/material.module';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { DoctorsListService } from './shared/services/doctors-list.service';
import { LoginServiceService } from './shared/services/login-service.service';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { DoctorListDoctorDetailsComponent } from './doctors/doctor-list-doctor-details/doctor-list-doctor-details.component';
import { ClinicListDetailsComponent } from './clinic/clinic-list-details/clinic-list-details.component';
import { DoctorMyProfileComponent } from './doctors/doctor-my-profile/doctor-my-profile.component';
import { DoctorMyProfileEditComponent } from './doctors/doctor-my-profile-edit/doctor-my-profile-edit.component';


import { FlexLayoutModule } from '@angular/flex-layout';
import { AppBlankComponent } from '../app/shared/layouts/blank/blank.component';

import { VerticalAppHeaderComponent } from '../app/shared/layouts/full/vertical-header/vertical-header.component';
import { VerticalAppSidebarComponent } from '../app/shared/layouts/full/vertical-sidebar/vertical-sidebar.component';
import { SpinnerComponent } from './shared/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FullComponent } from '../app/shared/layouts/full/full.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomePageComponent,
    DoctorListComponent,
    LoginComponent,
    DoctorSignupComponent,
    ClinicListComponent,
    PageNotFoundComponent,
    DoctorListDoctorDetailsComponent,
    ClinicListDetailsComponent,
    DoctorMyProfileComponent,
    DoctorMyProfileEditComponent,
    FullComponent,
    VerticalAppHeaderComponent,
    SpinnerComponent,
    AppBlankComponent,
    VerticalAppSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MaterialComponentsModule
  ],
  providers: [AuthGuard,DoctorsListService,LoginServiceService,{
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
