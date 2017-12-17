import { Component, OnInit } from '@angular/core';
import {LlbService} from '../service/llb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: LlbService) { }

  ngOnInit() {
  }

}
