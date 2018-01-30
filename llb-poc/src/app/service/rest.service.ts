import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, RequestOptions, Headers, ResponseContentType} from '@angular/http';
import {LoaderService} from './loader.service';

import 'rxjs/add/operator/finally';

const api_key = '5a07a2f986f30e00015b3cb106cfd0ff4f0f4949bf1ee95ef3e3a930';

@Injectable()
export class RestService {

  constructor(private http: Http, private loader: LoaderService) { }

  /**
   * Get request to REST
   * @param {string} url
   * @param {ResponseContentType} responseType
   * @returns {Observable<any>}
   */
  get(url: string, doFinally: () => void = () => {}, responseType = ResponseContentType.Json): Observable<any> {
    this.loader.addTask();

    return this.http.get(
      url,
      new RequestOptions({
        headers: new Headers({
          'Authorization': 'Bearer ' + api_key
        }),
        responseType: responseType
      }))
      .finally(() => {
        this.loader.removeTask();
        doFinally();
      });
  }
}
