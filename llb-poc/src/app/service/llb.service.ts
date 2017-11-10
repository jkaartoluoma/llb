import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {RestService} from './rest.service';
import {Observable} from 'rxjs/Observable';
import {VehicleData} from '../model/VehicleData';

const realTimeDataApiUrl = environment.realTimeDataApiUrl;

@Injectable()
export class LlbService {
  vehicleId: number;
  data: VehicleData;
  intervalLoop: any;

  constructor(private rest: RestService) {

  }

  getRealTimeData(busId: number): Observable<any> {
    return this.rest.get(realTimeDataApiUrl + '/GetData?busId=' + busId);
  }

  start(): void {
    this.intervalLoop = setInterval (() => {
      if (this.vehicleId != null) {
        this.getRealTimeData(this.vehicleId).subscribe(res => {
          this.data = res.json();
<<<<<<< HEAD
          this.data.can = res.json()['fi/llb/bus/1612/can/'];
=======
          //console.log(this.data);
>>>>>>> f6db32b4b103ae5264a2094cbba6990d3b8f1315
        });
      }
    }, 1000);
  }
}
