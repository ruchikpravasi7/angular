import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';

import { MaterialModule } from './material-module';
import { MaterialComponentsModule } from './material-component/material.module';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginServiceService } from './shared/services/login-service.service';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';

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
    LoginComponent,
    PageNotFoundComponent,
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
  providers: [AuthGuard,LoginServiceService,{
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
