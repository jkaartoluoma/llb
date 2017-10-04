import { Component } from '@angular/core';
import {LlbService} from './service/llb.service';
import {LoaderService} from './service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  testOk: boolean = null;

  constructor(public llbService: LlbService, public loader: LoaderService) {}

  test(): void {
    this.llbService.getRealTimeData(1612)
      .finally(() => {
        if (this.testOk == null) {
          this.testOk = false;
        }
      })
      .subscribe(res => {
        console.log(res.json());
        const data = res.json();

        try {
          this.testOk = (data.BusId === 1612);
        } catch (e) {
          this.testOk = false;
        }
      });
  }
}
