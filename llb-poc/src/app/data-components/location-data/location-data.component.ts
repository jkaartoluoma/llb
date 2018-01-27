import { Component, OnInit } from '@angular/core';
import {LlbService} from '../../service/llb.service';
import {LoaderService} from '../../service/loader.service';
import {isNullOrUndefined} from '../../../utils';

@Component({
  selector: 'location-data',
  templateUrl: './location-data.component.html',
  styleUrls: ['./location-data.component.css', '../data-components.component.css']
})
export class LocationDataComponent implements OnInit {

  isNullOrUndefined = isNullOrUndefined;
  intervalLoop: any;
  valueBefore: number;

  constructor(public llbService: LlbService, public loader: LoaderService) { 
    
  }
  
  ngOnInit() {
    //this.rotateImage()
  }
  
  // 0=no mode value yet seen 1=no fix 2=2D 3=3D
  // makes string from NMEA mode data
  getNmeaMode(): string {
    if(this.llbService.isLiveData()) {
      if (this.llbService.data[0].mod === 1) {
        return 'no fix';
      } else if  (this.llbService.data[0].mod === 2) {
        return '2D';
      } else if (this.llbService.data[0].mod === 3) {
        return '3D';
      } else {
        return 'no mode value yet';
      }
    } else {
      return 'unknown';
    }
  }

  // boolean function to check if values are valid - easier html code
  isLocationDataValid(): boolean {
    return this.llbService.isLiveData() && !isNullOrUndefined(this.llbService.data[0].lat) && !isNullOrUndefined(this.llbService.data[0].lon);
  }
  isClimbRateValid(): boolean {
    return this.llbService.isLiveData() && !isNullOrUndefined(this.llbService.data[0].clm);
  }
  isAltitudeValid(): boolean {
    return this.llbService.isLiveData() && !isNullOrUndefined(this.llbService.data[0].alt);
  }
  isVerticalErrorValid(): boolean {
    return this.llbService.isLiveData() && !isNullOrUndefined(this.llbService.data[0].epv) && !isNullOrUndefined(this.llbService.data[0].epv);
  }
  isCompassValid(): boolean {
    return this.llbService.isLiveData() && !isNullOrUndefined(this.llbService.data[0].trc) && !isNullOrUndefined(this.llbService.data[0].trc);
  }
}
