import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, RequestOptions, ResponseContentType} from '@angular/http';
import {LoaderService} from './loader.service';

import 'rxjs/add/operator/finally';

@Injectable()
export class RestService {

  constructor(private http: Http, private loader: LoaderService) { }

  /**
   * Get request to REST
   * @param {string} url
   * @param {ResponseContentType} responseType
   * @returns {Observable<any>}
   */
  get(url: string, responseType = ResponseContentType.Json): Observable<any> {
    this.loader.addTask();

    return this.http.get(
      url,
      new RequestOptions({
        responseType: responseType
      }))
      .finally(() => {
        this.loader.removeTask();
      });
  }
}