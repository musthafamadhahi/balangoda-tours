import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements  CanActivate {

  constructor(public userService: UserService,
              public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (this.userService.isLoggedIn()) {
        window.alert('You have already signed in!!!');
        this.router.navigate(['']);
     }

      return true;
  }


}
