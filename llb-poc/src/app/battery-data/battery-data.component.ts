import { Component, OnInit } from '@angular/core';
import {LlbService} from '../service/llb.service';
import {LoaderService} from '../service/loader.service';

@Component({
  selector: 'battery-data',
  templateUrl: './battery-data.component.html',
  styleUrls: ['./battery-data.component.css']
})
export class BatteryDataComponent implements OnInit {

  constructor(public llbService: LlbService, public loader: LoaderService) { }

  ngOnInit() {
  }
  /*
  getTotal(): number {
	try{
	  return this.llbService.data[0].can.PWR_AUX_AirCompressor + this.llbService.data[0].can.PWR_AUX_HeatPump + this.llbService.data[0].can.PWR_AUX_DCDC + this.llbService.data[0].can.PWR_AUX_PowerSteering;
	} catch (e) {
      return -1;
    }  
  }*/
}
