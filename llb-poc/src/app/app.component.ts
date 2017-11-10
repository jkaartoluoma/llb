import {Component, OnInit} from '@angular/core';
import {LlbService} from './service/llb.service';
import {LoaderService} from './service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(public llbService: LlbService, public loader: LoaderService) {}

  ngOnInit() {
    this.llbService.start();
    this.llbService.vehicleId = 1612;
  }
=======
export class AppComponent {

  constructor(public llbService: LlbService, public loader: LoaderService) {}

>>>>>>> f6db32b4b103ae5264a2094cbba6990d3b8f1315
}
