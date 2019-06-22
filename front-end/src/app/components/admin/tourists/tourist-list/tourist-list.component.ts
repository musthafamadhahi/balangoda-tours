import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { User } from 'src/app/shared/service/user.model';

@Component({
  selector: 'app-tourist-list',
  templateUrl: './tourist-list.component.html',
  styleUrls: ['./tourist-list.component.scss']
})
export class TouristListComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.refreshGuideList();

  }

  refreshGuideList() {
    this.userService.getUserList().subscribe((res) => {
      this.userService.users = res as User[];
    });
  }

}
