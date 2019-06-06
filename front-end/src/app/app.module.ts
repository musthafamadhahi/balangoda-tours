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
import { UserComponent } from './components/auth/user/user.component';
import { SignInComponent } from './components/auth/user/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/user/sign-up/sign-up.component';
import { UserService } from './shared/service/user.service';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GuideComponentComponent } from './components/guide-dashboard/guide-component/guide-component.component';
// tslint:disable-next-line: max-line-length
import { GuideNavbarComponentComponent } from './components/guide-dashboard/layouts/guide-navbar-component/guide-navbar-component.component';
// tslint:disable-next-line: max-line-length
import { GuideSidebarComponentComponent } from './components/guide-dashboard/layouts/guide-sidebar-component/guide-sidebar-component.component';
import { GuidesComponentComponent } from './components/guide-dashboard/pages/guides-component/guides-component.component';

import { NavbarComponent } from './components/common/navbar/navbar.component';
import { LandingComponent } from './components/common/landing/landing.component';
import { SideNavAdminComponent } from './components/admin/side-nav-admin/side-nav-admin.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    GuideComponentComponent,
    GuideNavbarComponentComponent,
    GuideSidebarComponentComponent,
    GuidesComponentComponent,
    NavbarComponent,
    LandingComponent,
    SideNavAdminComponent,
    AdminDashboardComponent,
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
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
