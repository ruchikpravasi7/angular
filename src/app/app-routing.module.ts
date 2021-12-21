import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

import { HomePageComponent } from './home-page/home-page.component';
import { DoctorListComponent } from './doctors/doctor-list/doctor-list.component';
import { DoctorSignupComponent } from './doctors/doctor-signup/doctor-signup.component';
import { LoginComponent } from './login/login.component';
import { ClinicListComponent } from './clinic/clinic-list/clinic-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DoctorListDoctorDetailsComponent } from './doctors/doctor-list-doctor-details/doctor-list-doctor-details.component';
import { ClinicListDetailsComponent } from './clinic/clinic-list-details/clinic-list-details.component';
import { DoctorMyProfileComponent } from './doctors/doctor-my-profile/doctor-my-profile.component';
import { DoctorMyProfileEditComponent } from './doctors/doctor-my-profile-edit/doctor-my-profile-edit.component';
import { AppBlankComponent } from './shared/layouts/blank/blank.component';
import { FullComponent } from './shared/layouts/full/full.component';

const routes: Routes = [
  { path: '', component: FullComponent },
  { path: 'home', component: HomePageComponent },
  {
    path: 'doctors',
    component: DoctorListComponent,
  },
  {
    path: 'doctors/:id',
    component: DoctorListDoctorDetailsComponent,
  },

  { path: 'clinics', component: ClinicListComponent },
  {
    path: 'clinics/:id',
    component: ClinicListDetailsComponent,
  },
  { path: 'doctor_signup', component: DoctorSignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [
  HomePageComponent,
  DoctorListComponent,
  DoctorSignupComponent,
  LoginComponent,
  ClinicListComponent,
  PageNotFoundComponent,
  DoctorListDoctorDetailsComponent,
  ClinicListDetailsComponent,
  DoctorMyProfileComponent,
  DoctorMyProfileEditComponent,
  FullComponent
];
