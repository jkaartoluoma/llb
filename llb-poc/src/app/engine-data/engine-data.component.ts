import { Component, OnInit } from '@angular/core';
import {LlbService} from '../service/llb.service';
import {LoaderService} from '../service/loader.service';
import {isNullOrUndefined} from '../../utils';

@Component({
  selector: 'engine-data',
  templateUrl: './engine-data.component.html',
  styleUrls: ['./engine-data.component.css']
})
export class EngineDataComponent implements OnInit {
	
  isNullOrUndefined = isNullOrUndefined;
  gaugeValue:number;

  constructor(public llbService: LlbService, public loader: LoaderService) { }

  ngOnInit() {
    // if we want to use this gauge change this to 
    // this.MotorRPM();
    this.randomRot();
  }

  randomRot():void {
    setInterval (() => {
      this.gaugeValue = Math.random()*10000
    }, 1000);
  }

  isRpmValid(): boolean {
    return this.llbService.isLiveData() && !isNullOrUndefined(this.llbService.data[0].can.EEC1_MotorSpeed)
  }

  motorRPM(): void {
    setInterval (() => {
      if(this.llbService.isLiveData() && !isNullOrUndefined(this.llbService.data[0].can.EEC1_MotorSpeed)) {
        if(this.llbService.data[0].can.EEC1_MotorSpeed !== this.gaugeValue) {
          this.gaugeValue = this.llbService.data[0].can.EEC1_MotorSpeed;
        }
      } 
    }, 200);
  }
}
