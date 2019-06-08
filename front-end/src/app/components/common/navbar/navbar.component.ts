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

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/']);
  }

}
