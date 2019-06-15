import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class GuideGuard implements CanActivate {

  constructor(public userService: UserService,
              public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.userService.isLoggedIn()) {
      window.alert('You are not logged in to access this URL!');
      this.router.navigate(['']);
   }
    return true;
  }


}
