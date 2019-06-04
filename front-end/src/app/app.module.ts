import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './components/auth/user/user.component';
import { SingInComponent } from './components/auth/user/sing-in/sing-in.component';
import { SingUpComponent } from './components/auth/user/sing-up/sing-up.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SingInComponent,
    SingUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
