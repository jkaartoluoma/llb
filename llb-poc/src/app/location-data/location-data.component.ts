import { Component, OnInit } from '@angular/core';
import {LlbService} from '../service/llb.service';
import {LoaderService} from '../service/loader.service';

@Component({
  selector: 'location-data',
  templateUrl: './location-data.component.html',
  styleUrls: ['./location-data.component.css']
})
export class LocationDataComponent implements OnInit {

  //sets the center of the map to first numbers
  _lat: number;
  _lon: number;
  
  constructor(public llbService: LlbService, public loader: LoaderService) { 
    this._lat = this.llbService.data[0].lat;
    this._lon = this.llbService.data[0].lon;
  }
  
  ngOnInit() {
  }

}
