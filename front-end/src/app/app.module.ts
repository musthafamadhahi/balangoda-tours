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
import { SideNavGuideComponent } from './components/guide/side-nav-guide/side-nav-guide.component';
import { GuideDashboardComponent } from './components/guide/guide-dashboard/guide-dashboard.component';
import { SideNavTouristComponent } from './components/tourist/side-nav-tourist/side-nav-tourist.component';
import { TouristDashboardComponent } from './components/tourist/tourist-dashboard/tourist-dashboard.component';

// services
import { UserService } from './shared/service/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';


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
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
