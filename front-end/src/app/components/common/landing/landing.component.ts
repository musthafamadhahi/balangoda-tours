import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  title = 'Balangoda Tours | Home';

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    // $('.btn1').click(function() {
    //   $('html,body').animate({
    //       scrollTop: $('.two').offset().top},
    //       'slow');
    // });
  }

  isLoggedIn() {
    const userPayload = this.userService.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

}
