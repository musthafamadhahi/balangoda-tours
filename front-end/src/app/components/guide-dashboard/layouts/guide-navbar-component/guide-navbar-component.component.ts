import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-guide-navbar-component',
  templateUrl: './guide-navbar-component.component.html',
  styleUrls: ['./guide-navbar-component.component.scss']
})
export class GuideNavbarComponentComponent implements OnInit {

  userId = '';
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUserId();
  }

  onLogout() {
    this.authService.userLogout();
  }

  getUserId() {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    const decodedToken = helper.decodeToken(token);
    const tokenid = decodedToken.userId;
    this.userId = tokenid;
  }

}

