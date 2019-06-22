import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// components
import { UserComponent } from './components/auth/user/user.component';
import { SignInComponent } from './components/auth/user/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/user/sign-up/sign-up.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { LandingComponent } from './components/common/landing/landing.component';
import { SideNavAdminComponent } from './components/admin/side-nav-admin/side-nav-admin.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AddPackageComponent } from './components/admin/packages/add-package/add-package.component';
import { PackagesComponent } from './components/admin/packages/packages.component';
import { PackageListComponent } from './components/admin/packages/package-list/package-list.component';
import { SideNavGuideComponent } from './components/guide/side-nav-guide/side-nav-guide.component';
import { GuideDashboardComponent } from './components/guide/guide-dashboard/guide-dashboard.component';
import { SideNavTouristComponent } from './components/tourist/side-nav-tourist/side-nav-tourist.component';
import { TouristDashboardComponent } from './components/tourist/tourist-dashboard/tourist-dashboard.component';
import { HotelsComponent } from './components/admin/hotels/hotels.component';
import { LocationsComponent } from './components/admin/locations/locations.component';
import { AddHotelComponent } from './components/admin/hotels/add-hotel/add-hotel.component';
import { HotelListComponent } from './components/admin/hotels/hotel-list/hotel-list.component';
import { LocationListComponent } from './components/admin/locations/location-list/location-list.component';
import { AddLocationComponent } from './components/admin/locations/add-location/add-location.component';
import { GuidesComponent } from './components/admin/guides/guides.component';
import { AddGuideComponent } from './components/admin/guides/add-guide/add-guide.component';
import { GuideListComponent } from './components/admin/guides/guide-list/guide-list.component';
import { TouristsComponent } from './components/admin/tourists/tourists.component';
import { LeavesComponent } from './components/guide/leaves/leaves.component';
import { AddLeaveComponent } from './components/guide/leaves/add-leave/add-leave.component';
import { LeaveListComponent } from './components/guide/leaves/leave-list/leave-list.component';
import { ToursComponent } from './components/tourist/tours/tours.component';
import { AddTourComponent } from './components/tourist/tours/add-tour/add-tour.component';
import { TourListComponent } from './components/tourist/tours/tour-list/tour-list.component';
import { TouristPackagesComponent } from './components/tourist/tourist-packages/tourist-packages.component';
import { TouristGuidesComponent } from './components/tourist/tourist-guides/tourist-guides.component';
import { TouristLocationsComponent } from './components/tourist/tourist-locations/tourist-locations.component';
import { TouristHotelsComponent } from './components/tourist/tourist-hotels/tourist-hotels.component';

// services
import { UserService } from './shared/service/user.service';
import { GuideService } from './shared/service/guide.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminGuard } from './auth/admin.guard';
import { GuideGuard } from './auth/guide.guard';
import { TouristGuard } from './auth/tourist.guard';
import { LoggedinGuard } from './auth/loggedin.guard';
import { TouristListComponent } from './components/admin/tourists/tourist-list/tourist-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    LandingComponent,
    SideNavAdminComponent,
    AdminDashboardComponent,
    SideNavGuideComponent,
    GuideDashboardComponent,
    TouristDashboardComponent,
    SideNavTouristComponent,
    AddPackageComponent,
    PackagesComponent,
    PackageListComponent,
    HotelsComponent,
    LocationsComponent,
    AddHotelComponent,
    HotelListComponent,
    LocationListComponent,
    AddLocationComponent,
    GuidesComponent,
    AddGuideComponent,
    GuideListComponent,
    TouristsComponent,
    LeavesComponent,
    AddLeaveComponent,
    LeaveListComponent,
    ToursComponent,
    AddTourComponent,
    TourListComponent,
    TouristPackagesComponent,
    TouristGuidesComponent,
    TouristLocationsComponent,
    TouristHotelsComponent,
    TouristListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    UserService, GuideService, AdminGuard, GuideGuard, TouristGuard, LoggedinGuard, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
