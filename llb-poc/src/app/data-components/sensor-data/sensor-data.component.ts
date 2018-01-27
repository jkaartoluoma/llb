import { Component, OnInit } from '@angular/core';
import {LlbService} from '../../service/llb.service';
import {LoaderService} from '../../service/loader.service';

@Component({
  selector: 'sensor-data',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.css', '../data-components.component.css']
})
export class SensorDataComponent implements OnInit {

  constructor(public llbService: LlbService, public loader: LoaderService) { }

  ngOnInit() {
  }

}
