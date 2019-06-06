import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-guide',
  templateUrl: './side-nav-guide.component.html',
  styleUrls: ['./side-nav-guide.component.scss']
})
export class SideNavGuideComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/signin']);
  }

}
