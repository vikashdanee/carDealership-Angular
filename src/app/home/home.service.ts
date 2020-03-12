import {Injectable, OnInit} from '@angular/core';
import {Car} from '../../model/car';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get<Car[]>('/api/cars');
  }

}
