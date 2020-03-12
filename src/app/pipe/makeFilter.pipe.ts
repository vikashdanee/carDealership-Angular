import { Pipe, PipeTransform } from '@angular/core';
import {Car} from '../../model/car';

@Pipe({
  name: 'makeFilter'
})
export class MakeFilterPipe implements PipeTransform {

  transform(cars: Car[]): unknown {
    return cars.filter(car => car.hasSunroof);
  }

}
