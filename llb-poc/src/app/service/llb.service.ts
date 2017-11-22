import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {RestService} from './rest.service';
import {Observable} from 'rxjs/Observable';
import {VehicleData} from '../model/VehicleData';

const realTimeDataApiUrl = environment.realTimeDataApiUrl;

// Length of the data kept in memory at the time (seconds)
const dataLength = 60;

@Injectable()
export class LlbService {
  _vehicleId: number;

  // Up-to-date vehicle data, index 0 containing the most recent data
  data: VehicleData[] = [];

  intervalLoop: any;

  set vehicleId(id: number) {
    this._vehicleId = id;
    this.data = [];
  }

  constructor(private rest: RestService) {

  }

  getRealTimeData(busId: number): Observable<any> {
    return this.rest.get(realTimeDataApiUrl + '/GetData?busId=' + busId);
  }

  start(): void {
    this.intervalLoop = setInterval (() => {
      if (this._vehicleId != null) {

        // Get new data
        this.getRealTimeData(this._vehicleId).subscribe(res => {
          // Create temp array
          const tempArray: VehicleData[] = this.data.slice();

          // Catch data from response
          const tempData: VehicleData = res.json();
          tempData.can = res.json()['fi/llb/bus/1612/can/'];

          // Add most recent data to memory
          tempArray.unshift(tempData);

          // Remove excess data
          if (tempArray.length > dataLength) {
            tempArray.splice(dataLength, 1);
          }

          // Update datatable
          this.data = tempArray;
        });
      }
    }, 1000);
  }
}
