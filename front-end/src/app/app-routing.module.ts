import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/auth/user/user.component';
import { SignInComponent } from './components/auth/user/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/user/sign-up/sign-up.component';
import { LandingComponent } from './components/common/landing/landing.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { TouristDashboardComponent } from './components/tourist/tourist-dashboard/tourist-dashboard.component';
import { GuideDashboardComponent } from './components/guide/guide-dashboard/guide-dashboard.component';

const routes: Routes = [
  // common
  { path: '', component: LandingComponent},
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'signin', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },

  // admin
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/guides', component: AdminDashboardComponent },

  // guide
  { path: 'guide/dashboard', component: GuideDashboardComponent },

  // tourist
  { path: 'tourist/dashboard', component: TouristDashboardComponent },

  {path: '**', redirectTo: '/', pathMatch: 'full'},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
