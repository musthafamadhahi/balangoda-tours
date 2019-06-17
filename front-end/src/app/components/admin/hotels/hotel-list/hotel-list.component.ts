import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/shared/service/hotel.service';
import { Hotel } from 'src/app/shared/service/hotel.model';
import { NgForm } from '@angular/forms';
import { AddHotelComponent } from '../add-hotel/add-hotel.component';

declare var M: any;

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  constructor(public hotelService: HotelService,
              private addHotelComponent: AddHotelComponent) { }

  ngOnInit() {
    this.refreshHotelList();
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
        this.addHotelComponent.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
