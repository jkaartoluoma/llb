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

}
