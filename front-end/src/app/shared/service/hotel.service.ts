import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from './hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  selectedHotel: Hotel;
  hotels: Hotel[];

  constructor(private http: HttpClient) { }

  postHotel(htl: Hotel) {
    return this.http.post(environment.apiBaseUrl + '/hotels/add' , htl);
  }

  getHotelList() {
    return this.http.get(environment.apiBaseUrl + '/hotels/get');
  }

  putHotel(htl: Hotel) {
    return this.http.post(environment.apiBaseUrl + `/hotels/update/${htl._id}`, htl);
  }

// tslint:disable-next-line: variable-name
  deleteHotel(_id: string) {
    return this.http.delete(environment.apiBaseUrl + `/hotels/delete/${_id}`);
  }

}
