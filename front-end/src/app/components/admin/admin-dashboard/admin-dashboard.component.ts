import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
