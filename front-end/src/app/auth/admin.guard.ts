import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(public userService: UserService,
              public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if (!this.userService.isLoggedIn()) {
       window.alert('You are not logged in to access this URL!');
       this.router.navigate(['']);
      }
      return true;
  }


}
