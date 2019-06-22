import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getUrl() {
// tslint:disable-next-line: max-line-length
    return 'url(\'https://loveincorporated.blob.core.windows.net/contentimages/fullsize/8d311461-e6ec-4e5a-9eab-6a117a43f9c1-woman-travelling-alone.jpg\')';
  }

}
