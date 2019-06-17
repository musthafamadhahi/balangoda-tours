import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelService } from 'src/app/shared/service/hotel.service';
import { Hotel } from 'src/app/shared/service/hotel.model';

declare var M: any;

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent implements OnInit {

  constructor(public hotelService: HotelService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshHotelList();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.hotelService.selectedHotel = {
      _id: '',
      name: '',
      address: '',
    };
  }

  onSubmit(form: NgForm) {
// tslint:disable-next-line: triple-equals
    if (form.value._id == '') {
      this.hotelService.postHotel(form.value).subscribe((res) => {
        this.resetForm(form);
        // this.refreshHotelList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    } else {
      this.hotelService.putHotel(form.value).subscribe((res) => {
        this.resetForm(form);
        // this.refreshHotelList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshHotelList() {
    this.hotelService.getHotelList().subscribe((res) => {
      this.hotelService.hotels = res as Hotel[];
    });
  }

  onEdit(htl: Hotel) {
    this.hotelService.selectedHotel = htl;
  }

// tslint:disable-next-line: variable-name
  onDelete(_id: string, form: NgForm) {
// tslint:disable-next-line: triple-equals
    if (confirm('Are you sure to delete this record ?') == true) {
      this.hotelService.deleteHotel(_id).subscribe((res) => {
        this.refreshHotelList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
