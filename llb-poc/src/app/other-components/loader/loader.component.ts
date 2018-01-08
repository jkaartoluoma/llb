import { Component } from '@angular/core';
import {LlbService} from '../../service/llb.service';
import {isNullOrUndefined} from '../../../utils';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less']
})
export class LoaderComponent {
  isNullOrUndefined = isNullOrUndefined;

  constructor(public llbService: LlbService) {}
}
