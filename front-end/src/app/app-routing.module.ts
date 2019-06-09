import { PackageListComponent } from './components/admin/packages/package-list/package-list.component';
import { AddPackageComponent } from './components/admin/packages/add-package/add-package.component';
import { PackagesComponent } from './components/admin/packages/packages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/auth/user/user.component';
import { SignInComponent } from './components/auth/user/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/user/sign-up/sign-up.component';
import { LandingComponent } from './components/common/landing/landing.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { TouristDashboardComponent } from './components/tourist/tourist-dashboard/tourist-dashboard.component';
import { GuideDashboardComponent } from './components/guide/guide-dashboard/guide-dashboard.component';
import { LocationsComponent } from './components/admin/locations/locations.component';
import { AddLocationComponent } from './components/admin/locations/add-location/add-location.component';
import { LocationListComponent } from './components/admin/locations/location-list/location-list.component';
import { HotelsComponent } from './components/admin/hotels/hotels.component';
import { AddHotelComponent } from './components/admin/hotels/add-hotel/add-hotel.component';
import { HotelListComponent } from './components/admin/hotels/hotel-list/hotel-list.component';
import { TouristsComponent } from './components/admin/tourists/tourists.component';
import { GuidesComponent } from './components/admin/guides/guides.component';
import { GuideListComponent } from './components/admin/guides/guide-list/guide-list.component';
import { AddGuideComponent } from './components/admin/guides/add-guide/add-guide.component';

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
  {
    path: 'admin/add-location', component: LocationsComponent,
    children: [{ path: '', component: AddLocationComponent }]
  },
  {
    path: 'admin/list-location', component: LocationsComponent,
    children: [{ path: '', component: LocationListComponent }]
  },
  {
    path: 'admin/add-hotel', component: HotelsComponent,
    children: [{ path: '', component: AddHotelComponent }]
  },
  {
    path: 'admin/list-hotel', component: HotelsComponent,
    children: [{ path: '', component: HotelListComponent }]
  },
  {
    path: 'admin/add-package', component: PackagesComponent,
    children: [{ path: '', component: AddPackageComponent }]
  },
  {
    path: 'admin/list-package', component: PackagesComponent,
    children: [{ path: '', component: PackageListComponent }]
  },
  {
    path: 'admin/add-guide', component: GuidesComponent,
    children: [{ path: '', component: AddGuideComponent }]
  },
  {
    path: 'admin/list-guide', component: GuidesComponent,
    children: [{ path: '', component: GuideListComponent }]
  },
  { path: 'admin/tourists', component: TouristsComponent },

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
