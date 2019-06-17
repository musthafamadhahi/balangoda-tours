import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/shared/service/guide.service';
import { User } from 'src/app/shared/service/user.model';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-guide-list',
  templateUrl: './guide-list.component.html',
  styleUrls: ['./guide-list.component.scss']
})
export class GuideListComponent implements OnInit {

  constructor(public guideService: GuideService) { }

  ngOnInit() {
    this.refreshGuideList();
  }

  refreshGuideList() {
    this.guideService.getGuideList().subscribe((res) => {
      this.guideService.guides = res as User[];
    });
  }

  onDelete(email: string) {
// tslint:disable-next-line: triple-equals
    if (confirm('Are you sure to delete this record ?') == true) {
      this.guideService.deleteGuide(email).subscribe((res) => {
        this.refreshGuideList();
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
