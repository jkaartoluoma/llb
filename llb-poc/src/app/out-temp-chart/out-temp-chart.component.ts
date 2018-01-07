import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'out-temp-chart',
  templateUrl: './out-temp-chart.component.html',
  styleUrls: ['./out-temp-chart.component.css']
})
export class OutTempChartComponent implements OnInit {

  @Input() data: number;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
