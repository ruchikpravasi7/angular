import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AppBlankComponent } from './shared/layouts/blank/blank.component';
import { FullComponent } from './shared/layouts/full/full.component';
import { SearchComponent } from './search/search/search.component';
import { StoreListingComponent } from './store/store-listing/store-listing.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/admin' },
  {
    path: 'admin', component: FullComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'search', component: SearchComponent },
      { path: 'store', component: StoreListingComponent }
    ]
  },
  { path: 'home', component: HomePageComponent },
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
  LoginComponent,
  PageNotFoundComponent,
  FullComponent,
  SearchComponent
];
