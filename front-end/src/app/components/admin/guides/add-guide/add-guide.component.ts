import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GuideService } from 'src/app/shared/service/guide.service';


@Component({
  selector: 'app-add-guide',
  templateUrl: './add-guide.component.html',
  styleUrls: ['./add-guide.component.scss']
})
export class AddGuideComponent implements OnInit {

// tslint:disable-next-line: max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public guideService: GuideService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.guideService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        }
      }
    );
  }

  resetForm(form: NgForm) {
    this.guideService.selectedUser = {
      fullName: '',
      email: '',
      role: 'guide',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
