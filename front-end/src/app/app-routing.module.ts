import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/auth/user/user.component';
import { SignInComponent } from './components/auth/user/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/user/sign-up/sign-up.component';
import { GuidesComponentComponent } from './components/guide-dashboard/pages/guides-component/guides-component.component';
import { GuideComponentComponent } from './components/guide-dashboard/guide-component/guide-component.component';
import { AuthGuard } from './components/auth/auth.guard';

const routes: Routes = [
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
},
{ path: 'guides', component: GuidesComponentComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
