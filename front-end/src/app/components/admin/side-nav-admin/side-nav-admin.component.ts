import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-admin',
  templateUrl: './side-nav-admin.component.html',
  styleUrls: ['./side-nav-admin.component.scss']
})
export class SideNavAdminComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/signin']);
  }

}
