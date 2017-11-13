import { Component, OnInit } from '@angular/core';
import {LlbService} from '../service/llb.service';
import {LoaderService} from '../service/loader.service';

@Component({
  selector: 'bus-data',
  templateUrl: './bus-data.component.html',
  styleUrls: ['./bus-data.component.css']
})
export class BusDataComponent implements OnInit {

  constructor(public llbService: LlbService, public loader: LoaderService) { }

  ngOnInit() {
  }

}
