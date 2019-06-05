import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/auth/user/user.component';
import { SignInComponent } from './components/auth/user/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/user/sign-up/sign-up.component';
<<<<<<< HEAD
import { GuidesComponentComponent } from './components/guide-dashboard/pages/guides-component/guides-component.component';
import { GuideComponentComponent } from './components/guide-dashboard/guide-component/guide-component.component';
import { AuthGuard } from './components/auth/auth.guard';
=======
import { LandingComponent } from './components/common/landing/landing.component';
>>>>>>> 8178e3af8751e849c0e76503faa61fd1a09f9e82

const routes: Routes = [
  { path: '', component: LandingComponent},
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'signin', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  {
    path: '', redirectTo: '/signin', pathMatch: 'full'
<<<<<<< HEAD
},
{ path: 'guides', component: GuidesComponentComponent }
=======
  }
>>>>>>> 8178e3af8751e849c0e76503faa61fd1a09f9e82
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
