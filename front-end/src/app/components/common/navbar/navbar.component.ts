import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userDetails;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
// tslint:disable-next-line: no-string-literal
        this.userDetails = res['user'];
        console.log(this.userDetails);
      },
      err => {
        console.log(err);

      }
    );
  }

  isLoggedIn() {
    const userPayload = this.userService.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  isAdmin() {
    const role = this.userDetails.role;
    if (role === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  isGuide() {
    const role = this.userDetails.role;
    if (role === 'guide') {
      return true;
    } else {
      return false;
    }
  }

  isTourist() {
    const role = this.userDetails.role;
    if (role === 'tourist') {
      return true;
    } else {
      return false;
    }
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/']);
  }

}
