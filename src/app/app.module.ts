import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialModule } from './material/material.module';
import { DoctorListComponent } from './doctors/doctor-list/doctor-list.component';
import { LoginComponent } from './login/login.component';
import { PatientSignupComponent } from './patients/patient-signup/patient-signup.component';
import { DoctorSignupComponent } from './doctors/doctor-signup/doctor-signup.component';
import { ClinicListComponent } from './clinic/clinic-list/clinic-list.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DoctorDashboardComponent } from './doctors/doctor-dashboard/doctor-dashboard.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DoctorAppointmentsComponent } from './doctors/doctor-appointments/doctor-appointments.component';
import { DoctorClinicsComponent } from './doctors/doctor-clinics/doctor-clinics.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { DoctorsListService } from './shared/services/doctors-list.service';
import { LoginServiceService } from './shared/services/login-service.service';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { PatientDashboardComponent } from './patients/patient-dashboard/patient-dashboard.component';
import { PatientAppointmentsComponent } from './patients/patient-appointments/patient-appointments.component';
import { DoctorListDoctorDetailsComponent } from './doctors/doctor-list-doctor-details/doctor-list-doctor-details.component';
import { DoctorBookAppointmentComponent } from './doctors/doctor-book-appointment/doctor-book-appointment.component';
import { PatientProfileComponent } from './patients/patient-profile/patient-profile.component';
import { ClinicListDetailsComponent } from './clinic/clinic-list-details/clinic-list-details.component';
import { PatientProfileAboutComponent } from './patients/patient-profile-about/patient-profile-about.component';
import { PatientProfileOtherIllnessComponent } from './patients/patient-profile-other-illness/patient-profile-other-illness.component';
import { PatientProfileOperationsSurgeriesComponent } from './patients/patient-profile-operations-surgeries/patient-profile-operations-surgeries.component';
import { PatientProfileFamilyHistoryComponent } from './patients/patient-profile-family-history/patient-profile-family-history.component';
import { PatientEditProfileComponent } from './patients/patient-edit-profile/patient-edit-profile.component';
import { DoctorAppointmentDetailsComponent } from './doctors/doctor-appointment-details/doctor-appointment-details.component';
import { DoctorAppointmentDetailsOtherIllnessComponent } from './doctors/doctor-appointment-details-other-illness/doctor-appointment-details-other-illness.component';
import { DoctorAppointmentDetailsoperationsSurgeriesComponent } from './doctors/doctor-appointment-detailsoperations-surgeries/doctor-appointment-detailsoperations-surgeries.component';
import { DoctorAppointmentDetailsfamilyHistoryComponent } from './doctors/doctor-appointment-detailsfamily-history/doctor-appointment-detailsfamily-history.component';
import { DoctorAppointmentAddPrescriptionComponent } from './doctors/doctor-appointment-add-prescription/doctor-appointment-add-prescription.component';
import { DoctorClinicAddComponent } from './doctors/doctor-clinic-add/doctor-clinic-add.component';
import { PatientAppointmentPrescriptionComponent } from './patients/patient-appointment-prescription/patient-appointment-prescription.component';
import { DoctorMyProfileComponent } from './doctors/doctor-my-profile/doctor-my-profile.component';
import { DoctorMyProfileEditComponent } from './doctors/doctor-my-profile-edit/doctor-my-profile-edit.component';
import { PatientChatComponent } from './patients/patient-chat/patient-chat.component';
import { PatientChatWindowComponent } from './patients/patient-chat-window/patient-chat-window.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomePageComponent,
    DoctorListComponent,
    LoginComponent,
    PatientSignupComponent,
    DoctorSignupComponent,
    ClinicListComponent,
    DoctorDashboardComponent,
    PageNotFoundComponent,
    DoctorAppointmentsComponent,
    DoctorClinicsComponent,
    PatientDashboardComponent,
    PatientAppointmentsComponent,
    DoctorListDoctorDetailsComponent,
    DoctorBookAppointmentComponent,
    PatientProfileComponent,
    ClinicListDetailsComponent,
    PatientProfileAboutComponent,
    PatientProfileOtherIllnessComponent,
    PatientProfileOperationsSurgeriesComponent,
    PatientProfileFamilyHistoryComponent,
    PatientEditProfileComponent,
    DoctorAppointmentDetailsComponent,
    DoctorAppointmentDetailsOtherIllnessComponent,
    DoctorAppointmentDetailsoperationsSurgeriesComponent,
    DoctorAppointmentDetailsfamilyHistoryComponent,
    DoctorAppointmentAddPrescriptionComponent,
    DoctorClinicAddComponent,
    PatientAppointmentPrescriptionComponent,
    DoctorMyProfileComponent,
    DoctorMyProfileEditComponent,
    PatientChatComponent,
    PatientChatWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [AuthGuard,DoctorsListService,LoginServiceService,{
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
