import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    GuideComponentComponent,
    GuideNavbarComponentComponent,
    GuideSidebarComponentComponent,
    GuidesComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
