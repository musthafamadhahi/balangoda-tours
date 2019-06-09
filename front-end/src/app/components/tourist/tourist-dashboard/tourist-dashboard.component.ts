import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-tourist-dashboard',
  templateUrl: './tourist-dashboard.component.html',
  styleUrls: ['./tourist-dashboard.component.scss']
})
export class TouristDashboardComponent implements OnInit {

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
