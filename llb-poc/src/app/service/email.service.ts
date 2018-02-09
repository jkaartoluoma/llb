import { Injectable } from '@angular/core';
import {GoogleApiService} from 'ng-gapi';
import {environment} from '../../environments/environment';

@Injectable()
export class EmailService {
  apiKey = environment.gmailApiKey;

  constructor(private gapiService: GoogleApiService) {
    gapiService.onLoad().subscribe(() => {
      // Init api here
      console.log(this.apiKey + this.gapiService);
    });
  }
}
