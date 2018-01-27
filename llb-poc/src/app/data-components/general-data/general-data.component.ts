import { Component, OnInit } from '@angular/core';
import {LlbService} from '../../service/llb.service';
import {LoaderService} from '../../service/loader.service';
import {isNullOrUndefined} from '../../../utils';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'general-data',
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.css', '../data-components.component.css']
})


export class GeneralDataComponent implements OnInit, OnChanges {
  isNullOrUndefined = isNullOrUndefined;

  constructor(public llbService: LlbService, public loader: LoaderService) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}


