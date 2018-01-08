import { Component, OnInit } from '@angular/core';
import {LlbService} from '../../service/llb.service';
import {LoaderService} from '../../service/loader.service';
import {isNullOrUndefined} from '../../../utils';

@Component({
  selector: 'battery-data',
  templateUrl: './battery-data.component.html',
  styleUrls: ['./battery-data.component.css']
})
export class BatteryDataComponent implements OnInit {
  // Historical data for total electricity consumed
  total_inst_ex: number[] = [];
  
  isNullOrUndefined = isNullOrUndefined;
  
  constructor(public llbService: LlbService, public loader: LoaderService) { }
  
  ngOnInit() { 
	  this.total_inst_ex = this.llbService.data.map(e => (e.can.PWR_AUX_PowerSteering + e.can.PWR_AUX_HeatPump + e.can.PWR_AUX_DCDC + e.can.PWR_AUX_AirCompressor)); // ei toimi?
	  
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
