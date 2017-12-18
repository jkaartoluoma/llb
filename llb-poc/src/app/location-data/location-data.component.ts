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

  isNullOrUndefined = isNullOrUndefined;
  intervalLoop: any;

  constructor(public llbService: LlbService, public loader: LoaderService) { 
    
  }
  
  ngOnInit() {
    //rotates compass to 0degrees and then start the loop
    document.getElementById("compass").style.transform = "rotate(" + (-45) + "deg)"
    this.rotateImage()
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
  rotateImage(): void {
    this.intervalLoop = setInterval (() => {
      if(this.llbService.data[0].trc) document.getElementById("compass").style.transform = "rotate(" + (this.llbService.data[0].trc - 45) + "deg)";
    }, 1000);
  }
}
