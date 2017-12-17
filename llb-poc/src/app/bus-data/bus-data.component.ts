import {Component, OnInit} from '@angular/core';
import {LlbService} from '../service/llb.service';
import {LoaderService} from '../service/loader.service';
import {isNullOrUndefined} from '../../utils';

@Component({
  selector: 'bus-data',
  templateUrl: './bus-data.component.html',
  styleUrls: ['./bus-data.component.css']
})
export class BusDataComponent implements OnInit {
  // Historical data for speed
  spd_ex: number[] = [];

  // Wheel base speed history
  wbvs_ex: number[] = [];

  isNullOrUndefined = isNullOrUndefined;

  constructor(public llbService: LlbService, public loader: LoaderService) { }

  ngOnInit() {
    // Calculate historical data
    this.spd_ex = this.llbService.data.map(e => e.spd * 3.6);
    this.wbvs_ex = this.llbService.data.map(e => e.can.CCVS_WheelBasedVehicleSpeed);

    document.getElementById("busicon").style.transform = "rotate(7deg)";
  }

  getMovenmentStatus(): string {
    try {
      return '' + (this.llbService.data[0].can.TCO1_VehicleMotion === 1 ? 'moving' : 'in place');
    } catch (e) {
      return 'unknown';
    }
  }

  getDirection(): string {
    try {
      return '' + (this.llbService.data[0].can.TCO1_DirectionIndicator === 0 ? 'forward' : 'backwards');
    } catch (e) {
      return 'unknown';
    }
  }

  getGear(): string {
    try {
      const val = this.llbService.data[0].can.ETC2_TransCurrentGear;

      return '' + (val === 1 ? 'on forwards' : val === -1 ? 'on reverse' : 'on neutral');
    } catch (e) {
      return 'unknown';
    }
  }
}
