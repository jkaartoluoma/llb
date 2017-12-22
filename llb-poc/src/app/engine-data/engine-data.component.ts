import { Component, OnInit } from '@angular/core';
import {LlbService} from '../service/llb.service';
import {LoaderService} from '../service/loader.service';
import {isNullOrUndefined} from '../../utils';

@Component({
  selector: 'engine-data',
  templateUrl: './engine-data.component.html',
  styleUrls: ['./engine-data.component.css']
})
export class EngineDataComponent implements OnInit {
	
  isNullOrUndefined = isNullOrUndefined;
  
  constructor(public llbService: LlbService, public loader: LoaderService) { }

  ngOnInit() {
  }

}
