import { Component, OnInit } from '@angular/core';
import {LlbService} from '../../service/llb.service';
import {LoaderService} from '../../service/loader.service';
import {isNullOrUndefined} from '../../../utils';

@Component({
  selector: 'location-data',
  templateUrl: './location-data.component.html',
  styleUrls: ['./location-data.component.css']
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
  //rotates image every 0.2 second if the image is in sight and value has changed
  // rotateImage(): void {
  //   this.intervalLoop = setInterval (() => {
  //     if(this.llbService.isLiveData() && !isNullOrUndefined(this.llbService.data[0].trc) && document.getElementById("compass")) {
  //       if(this.llbService.data[0].trc !== this.valueBefore) {
  //         this.valueBefore = this.llbService.data[0].trc;
  //         document.getElementById("compass").style.transform = "rotate(" + (this.llbService.data[0].trc - 45) + "deg)";
  //       }
  //     } 
  //   }, 200);
  // }

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