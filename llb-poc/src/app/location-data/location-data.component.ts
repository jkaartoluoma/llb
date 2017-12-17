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
  location: Coordinates;

  constructor(public llbService: LlbService, public loader: LoaderService) { 
    
  }
  
  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
      });
    }
  }
  
}
