import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {RestService} from './rest.service';
import {Observable} from 'rxjs/Observable';

const realTimeDataApiUrl = environment.realTimeDataApiUrl;

@Injectable()
export class LlbService {
  constructor(private rest: RestService) { }

  getRealTimeData(busId: number): Observable<any> {
    return this.rest.get(realTimeDataApiUrl + '/GetData?busId=' + busId);
  }
}
