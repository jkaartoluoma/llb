import { Component, OnInit } from '@angular/core';
import {LlbService} from '../../service/llb.service';
import {LoaderService} from '../../service/loader.service';
@Component({
  selector: 'movement-data',
  templateUrl: './movement-data.component.html',
  styleUrls: ['./movement-data.component.css', '../data-components.component.css']
})
export class MovementDataComponent implements OnInit {

  constructor(public llbService: LlbService, public loader: LoaderService) { }

  ngOnInit() {
  }

}
