import { Component, OnInit } from '@angular/core';
import {LlbService} from '../service/llb.service';
import {LoaderService} from '../service/loader.service';

@Component({
  selector: 'general-data',
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.css']
})


export class GeneralDataComponent implements OnInit {
  constructor(public llbService: LlbService, public loader: LoaderService) { }

  ngOnInit() {
  }

}


