import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'temp-chart',
  templateUrl: './temp-chart.component.html',
  styleUrls: ['./temp-chart.component.css']
})
export class TempChartComponent implements OnInit, OnChanges {

  @ViewChild('c') myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  @Input() data: number;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
    this.draw();
  }

  ngOnChanges() {
    this.draw();
  }


  draw(){

    

  }
}
