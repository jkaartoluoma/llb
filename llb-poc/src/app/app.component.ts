import { Component } from '@angular/core';
import {LlbService} from './service/llb.service';
import {LoaderService} from './service/loader.service';
import {VehicleData} from './model/VehicleData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  testOk: boolean = null;

  model: VehicleData;

  constructor(public llbService: LlbService, public loader: LoaderService) {}

  test(): void {
    this.llbService.getRealTimeData(1612)
      .finally(() => {
        if (this.testOk == null) {
          this.testOk = false;
        }
      })
      .subscribe(res => {
        const data = res.json();

        this.model = data;

        console.log(this.model);

        try {
          this.testOk = (data.BusId === 1612);
        } catch (e) {
          this.testOk = false;
        }
      });
  }

  getVehicleId(): string {
    if (this.model != null) {
      return this.model.BusId.toString();
    } else {
      return 'n/a';
    }
  }
}
