import {Component, OnInit} from '@angular/core';
import {LlbService} from './service/llb.service';
import {LoaderService} from './service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: "./" + (window.screen.width > 900 ?
    "app.component.html" :
    "app.component.mobile.html"),
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  vehicleIds:number[];

  constructor(public llbService: LlbService, public loader: LoaderService) {}

  ngOnInit() {
    this.llbService.start();
    this.getActiveVehicles();
    this.llbService.vehicleId = this.vehicleIds[0];
  }

  getActiveVehicles() {
    this.vehicleIds = [
      1612,3008,3009,9999
    ]
  }
}
