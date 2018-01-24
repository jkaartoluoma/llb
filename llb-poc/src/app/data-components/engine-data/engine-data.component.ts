import { Component, OnInit } from '@angular/core';
import {LlbService} from '../../service/llb.service';
import {LoaderService} from '../../service/loader.service';
import {isNullOrUndefined} from '../../../utils';

@Component({
  selector: 'engine-data',
  templateUrl: './engine-data.component.html',
  styleUrls: ['./engine-data.component.css']
})
export class EngineDataComponent implements OnInit {
	
  isNullOrUndefined = isNullOrUndefined;
  gaugeValue: number;
  slipPercent: number;

  constructor(public llbService: LlbService, public loader: LoaderService) { }

  ngOnInit() {
    // if we want to use this gauge change this to 
    this.motorRPM();
    this.slipGauge();
  }

  // boolean check if the rom is defined
  isRpmValid(): boolean {
    return this.llbService.isLiveData() && !isNullOrUndefined(this.llbService.data[0].can.EEC1_MotorSpeed)
  }

  // interval funciton to rotate rpm value when it changes
  motorRPM(): void {
    setInterval (() => {
      if(this.llbService.isLiveData() && !isNullOrUndefined(this.llbService.data[0].can.EEC1_MotorSpeed)) {
        if(this.llbService.data[0].can.EEC1_MotorSpeed !== this.gaugeValue) {
          this.gaugeValue = this.llbService.data[0].can.EEC1_MotorSpeed;
        }
      } else {
        // if no data set the gaugeValue to NaN
        this.gaugeValue = NaN;
      }
    }, 200);
  }

  // interval function to measure slip percentage when it changes
  slipGauge(): void {
    setInterval (() => {
      if(this.llbService.isLiveData() && !isNullOrUndefined(this.llbService.data[0].can.MOTOR_SlipPercentage)) {
        if(this.llbService.data[0].can.MOTOR_SlipPercentage !== this.slipPercent) {
          this.slipPercent = this.llbService.data[0].can.MOTOR_SlipPercentage;
        }
      } else {
        // if no data set the slipPercent to NaN
        this.slipPercent = NaN;
      }
    }, 200);
  }
  
}
