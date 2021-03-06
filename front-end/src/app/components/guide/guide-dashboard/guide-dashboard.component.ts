import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-guide-dashboard',
  templateUrl: './guide-dashboard.component.html',
  styleUrls: ['./guide-dashboard.component.scss']
})
export class GuideDashboardComponent implements OnInit {

  userDetails;

  constructor(private userService: UserService) { }

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
  }


