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

  constructor(public llbService: LlbService, public loader: LoaderService) {}

  ngOnInit() {
    this.llbService.start();
    this.llbService.vehicleId = 1612;
  }
}
