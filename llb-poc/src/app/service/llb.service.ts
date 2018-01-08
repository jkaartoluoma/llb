import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {Observable} from 'rxjs/Observable';
import {VehicleData} from './model/VehicleData';

const realTimeDataApiUrl = 'https://llb.cloud.tyk.io/llb-bus-api';

// Length of the data kept in memory at the time (seconds)
const dataLength = 60;

@Injectable()
export class LlbService {
  _vehicleId: number;

  // Up-to-date vehicle data, index 0 containing the most recent data
  data: VehicleData[] = [];

  intervalLoop: any;

  isLive: boolean;
  
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
          tempData.can = res.json()['fi/llb/bus/' + this._vehicleId + '/can/'];

          // Add most recent data to memory
          tempArray.unshift(tempData);

          // Remove excess data
          if (tempArray.length > dataLength) {
            tempArray.splice(dataLength, 1);
          }

          // Update datatable
          this.data = tempArray;
          if (new Date(this.data[0].tsl).getTime() > (new Date().getTime() - 10000)) {
            this.isLive = true;
          } else {
            this.isLive = false;
          }
      
        });
      }
    }, 1000);
  }
  
  isLiveData(): boolean {
    return this.isLive;
  }
  /**
   * Use this function to change bus id
   */
  changeBusId(id: number) {
    this.data = [];
    this._vehicleId = id;
  }
}
