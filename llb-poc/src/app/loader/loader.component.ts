import { Component } from '@angular/core';
import {LlbService} from '../service/llb.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less']
})
export class LoaderComponent {
  constructor(public llbService: LlbService) {}

  isNullOrUndefined(itm: any): boolean {
    return (itm === null || itm === undefined);
  }
}
