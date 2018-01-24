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
  }

  // boolean check if the rom is defined
  isRpmValid(): boolean {
    return this.llbService.isLiveData() && !isNullOrUndefined(this.llbService.data[0].can.EEC1_MotorSpeed)
  }
  
}
