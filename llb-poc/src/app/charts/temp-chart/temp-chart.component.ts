import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'temp-chart',
  templateUrl: './temp-chart.component.html',
  styleUrls: ['./temp-chart.component.css']
})
export class TempChartComponent implements OnInit{

  @Input() data: number;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
