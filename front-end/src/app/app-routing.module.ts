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
import { PackagesComponent } from './components/admin/packages/packages.component';
import { AddPackageComponent } from './components/admin/packages/add-package/add-package.component';
import { PackageListComponent } from './components/admin/packages/package-list/package-list.component';
import { HotelsComponent } from './components/admin/hotels/hotels.component';
import { AddHotelComponent } from './components/admin/hotels/add-hotel/add-hotel.component';
import { HotelListComponent } from './components/admin/hotels/hotel-list/hotel-list.component';
import { TouristsComponent } from './components/admin/tourists/tourists.component';
import { GuidesComponent } from './components/admin/guides/guides.component';
import { GuideListComponent } from './components/admin/guides/guide-list/guide-list.component';
import { AddGuideComponent } from './components/admin/guides/add-guide/add-guide.component';
import { LeavesComponent } from './components/guide/leaves/leaves.component';
import { AddLeaveComponent } from './components/guide/leaves/add-leave/add-leave.component';
import { ToursComponent } from './components/tourist/tours/tours.component';
import { AddTourComponent } from './components/tourist/tours/add-tour/add-tour.component';
import { TouristPackagesComponent } from './components/tourist/tourist-packages/tourist-packages.component';
import { TouristLocationsComponent } from './components/tourist/tourist-locations/tourist-locations.component';
import { TouristGuidesComponent } from './components/tourist/tourist-guides/tourist-guides.component';
import { TouristHotelsComponent } from './components/tourist/tourist-hotels/tourist-hotels.component';
import { AdminGuard } from './auth/admin.guard';
import { GuideGuard } from './auth/guide.guard';
import { TouristGuard } from './auth/tourist.guard';
import { LoggedinGuard } from './auth/loggedin.guard';

const routes: Routes = [
  // common
  { path: '', component: LandingComponent},
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent,  canActivate: [LoggedinGuard] }]
  },
  {
    path: 'signin', component: UserComponent,
    children: [{ path: '', component: SignInComponent, canActivate: [LoggedinGuard] }]
  },

  // admin
  { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AdminGuard] },
  {
    path: 'admin/add-location', component: LocationsComponent,
    children: [{ path: '', component: AddLocationComponent, canActivate: [AdminGuard] }]
  },
  {
    path: 'admin/list-location', component: LocationsComponent,
    children: [{ path: '', component: LocationListComponent, canActivate: [AdminGuard] }]
  },
  {
    path: 'admin/hotels', component: HotelsComponent,
    children: [{ path: '', component: AddHotelComponent }]
  },
  {
    path: 'admin/list-hotel', component: HotelsComponent,
    children: [{ path: '', component: HotelListComponent, canActivate: [AdminGuard] }]
  },
  {
    path: 'admin/packages', component: PackagesComponent,
    children: [{ path: '', component: AddPackageComponent, canActivate: [AdminGuard] }]
  },
  {
    path: 'admin/list-package', component: PackagesComponent,
    children: [{ path: '', component: PackageListComponent, canActivate: [AdminGuard] }]
  },
  {
    path: 'admin/guides', component: GuidesComponent,
    children: [{ path: '', component: AddGuideComponent , canActivate: [AdminGuard]}]
  },
  {
    path: 'admin/list-guide', component: GuidesComponent,
    children: [{ path: '', component: GuideListComponent , canActivate: [AdminGuard]}]
  },
  { path: 'admin/tourists', component: TouristsComponent, canActivate: [AdminGuard] },

  // guide
  { path: 'guide/dashboard', component: GuideDashboardComponent,  canActivate: [GuideGuard] },
  {
    path: 'guide/leave', component: LeavesComponent,
    children: [{ path: '', component: AddLeaveComponent ,  canActivate: [GuideGuard]}]
  },

  // tourist
  { path: 'tourist/dashboard', component: TouristDashboardComponent, canActivate: [TouristGuard] },
  {
    path: 'tourist/tours', component: ToursComponent,
    children: [{ path: '', component: AddTourComponent , canActivate: [TouristGuard]}]
  },
  {
    path: 'tourist/packages', component: TouristPackagesComponent, canActivate: [TouristGuard]
  },
  {
    path: 'tourist/locations', component: TouristLocationsComponent, canActivate: [TouristGuard]
  },
  {
    path: 'tourist/guides', component: TouristGuidesComponent, canActivate: [TouristGuard]
  },
  {
    path: 'tourist/hotels', component: TouristHotelsComponent, canActivate: [TouristGuard]
  },


  {path: '**', redirectTo: '/', pathMatch: 'full'},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
