import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';
import {Car} from '../../model/car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  makes = [];
  colors = [];
  features = [];

  filteredCars: Car[];
  cars: Car[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getCars().subscribe(cars => this.cars = cars);
    this.homeService.getCars().subscribe(cars => this.filteredCars = cars);
  }

  getAllCars() {
    this.homeService.getCars().subscribe(cars => this.cars = cars);
    this.filteredCars = this.cars;
  }

  sortByPrice() {
    this.filteredCars = this.filteredCars.sort(
      (car1, car2) => car1.price.toFixed()
        .localeCompare(car2.price.toFixed()));
  }

  filterByMake(make) {
    if (this.makes.indexOf(make) !== -1) {
      this.makes.splice(this.makes.indexOf(make), 1);
    } else {
      this.makes.push(make);
    }
    this.applyFilter();
  }

  filterByColor(color) {
    if (this.colors.indexOf(color) !== -1) {
      this.colors.splice(this.colors.indexOf(color), 1);
    } else {
      this.colors.push(color);
    }
    this.applyFilter();
  }

  filterByFeature(feature) {
    if (this.features.indexOf(feature) !== -1) {
      this.features.splice(this.features.indexOf(feature), 1);
    } else {
      this.features.push(feature);
    }
    this.applyFilter();
  }

  applyFilter() {
    this.filteredCars = this.cars;
    if (this.makes.length > 0) {
      this.filteredCars = this.filteredCars.filter(car => this.makes.includes(car.make));
    }

    if (this.colors.length > 0) {
      this.filteredCars = this.filteredCars.filter(car => this.colors.includes(car.color));
    }

    if (this.features.length > 0) {
      if (this.features.indexOf('Sun Roof') !== -1) {
        this.filteredCars = this.filteredCars.filter(car => car.hasSunroof);
      }

      if (this.features.indexOf('Four Wheel Drive') !== -1) {
        this.filteredCars = this.filteredCars.filter(car => car.fourWheelDrive);
      }

      if (this.features.indexOf('Low Miles') !== -1) {
        this.filteredCars = this.filteredCars.filter(car => car.hasLowMiles);
      }

      if (this.features.indexOf('Navigation') !== -1) {
        this.filteredCars = this.filteredCars.filter(car => car.hasNavigation);
      }

      if (this.features.indexOf('Power Windows') !== -1) {
        this.filteredCars = this.filteredCars.filter(car => car.hasPowerWindows);
      }

      if (this.features.indexOf('Heated Seat') !== -1) {
        this.filteredCars = this.filteredCars.filter(car => car.hasHeatedSeats);
      }
    }
  }

}
