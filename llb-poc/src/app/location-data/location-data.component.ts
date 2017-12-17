import { Component, OnInit } from '@angular/core';
import {LlbService} from '../service/llb.service';
import {LoaderService} from '../service/loader.service';
import {isNullOrUndefined} from '../../utils';

@Component({
  selector: 'location-data',
  templateUrl: './location-data.component.html',
  styleUrls: ['./location-data.component.css']
})
export class LocationDataComponent implements OnInit {

  //sets the center of the map to first numbers
  location: Coordinates;
  isNullOrUndefined = isNullOrUndefined;

  constructor(public llbService: LlbService, public loader: LoaderService) { 
    
  }
  
  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
      });
    }
  }
  
  // 0=no mode value yet seen 1=no fix 2=2D 3=3D
  // makes string from NMEA mode data
  getNmeaMode(): string {
    try {
      if (this.llbService.data[0].mod === 1) {
        return 'no fix';
      } else if  (this.llbService.data[0].mod === 2) {
        return '2D';
      } else if (this.llbService.data[0].mod === 3) {
        return '3D';
      } else {
        return 'no mode value yet';
      }
    } catch (e) {
      return 'unknown';
    }
  }
}
