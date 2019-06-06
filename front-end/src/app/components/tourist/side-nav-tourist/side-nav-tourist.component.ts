import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-side-nav-tourist',
  templateUrl: './side-nav-tourist.component.html',
  styleUrls: ['./side-nav-tourist.component.scss']
})
export class SideNavTouristComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/signin']);
  }

}
