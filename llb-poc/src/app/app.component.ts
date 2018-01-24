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
  body:HTMLElement = document.getElementById('body');

  //menu items form mobile mode
  selectedMenuMobile: number = 0;
  menuItems: any[] = [ 
    { id: 0, title: "Home" },
    { id: 1, title: "Raw Data" },
    { id: 2, title: "Info" },
    { id: 3, title: "Feedback" }
  ]

  constructor(public llbService: LlbService, public loader: LoaderService) {}

  ngOnInit() {
    this.llbService.start();
    this.getActiveVehicles();
    this.llbService.vehicleId = this.vehicleIds[0];
    // start animating background if desktop mode
    if (window.screen.width > 900) {
      this.animateBackground();
    } 
  }

  // Vehicle ID list for app
  getActiveVehicles() {
    this.vehicleIds = [
      1612,3008,3009,9999
    ]
  }

  // Background animations for desktop
  animateBackground() {
    setInterval(() => {
      if (this.llbService.isLiveData()) {
        if (Number(this.llbService._vehicleId) == this.llbService.data[0].BusId) {
          this.body.style.animation = "animatedBackground 60s linear infinite";
          if (this.llbService.data[0].can.TCO1_VehicleMotion == 1) {
            this.body.style.animationPlayState = "running";
          } else {
            this.body.style.animationPlayState = "paused";
          }
        }
      } else {
        this.body.style.animationPlayState = "paused";
      }
    }, 500);
  }

  onMenuClose(){
  }
  onMenuOpen() {
  }
  onItemSelect(item:any) {
    this.selectedMenuMobile = Number.parseInt(item.id);
    console.log(item);
  }

}
