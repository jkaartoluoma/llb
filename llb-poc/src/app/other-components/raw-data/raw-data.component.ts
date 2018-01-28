import { Component, OnInit} from '@angular/core';
import {LlbService} from '../../service/llb.service';
import {LoaderService} from '../../service/loader.service';

@Component({
  selector: 'app-raw-data',
  templateUrl: './raw-data.component.html',
  styleUrls: ['./raw-data.component.css']
})

export class RawDataComponent implements OnInit {

  constructor(public llbService: LlbService, public loader: LoaderService) { }

  data: HTMLElement;
  
  ngOnInit() {
	  // this.data = document.getElementById("rawdata");
	  // let x = JSON.stringify(this.llbService.data[0], null, '  ')
	  // .replace(/ /g, '&nbsp;')
	  // .replace(/\\n/g, '&lt;br&gt;');
  }

}

