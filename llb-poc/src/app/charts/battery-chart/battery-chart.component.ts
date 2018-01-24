import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-battery-chart',
  templateUrl: './battery-chart.component.html',
  styleUrls: ['./battery-chart.component.css']
})
export class BatteryChartComponent implements OnInit, OnChanges {
  @ViewChild('mainCanvas') myCanvas: ElementRef;
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
	
	// draws the battery canvas
  draw() {
    const charge = this.data;
		//https://github.com/bencevans/canvas-battery
    // Canvas
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
		
		//Battery outlines
		this.context.beginPath();
		this.context.rect(5, 5, 180, 90);
		this.context.lineWidth = 10;
		this.context.strokeStyle = 'black';
		this.context.stroke();

		this.context.beginPath();
		this.context.rect(190, 40, 10, 20);
		this.context.fillStyle = 'black';
		this.context.fill();
		this.context.stroke();

		//Battery fill
		this.context.beginPath();
		this.context.rect(10, 10, 170 * (charge/100), 80);
		this.context.fillStyle = 'rgb('+ Math.floor((1-(charge/100))*255) + ',' + Math.floor((charge/100)*255) + ',0)';
		this.context.fill();
		
		//Number
		this.context.font = '3em Arial';
		this.context.fillStyle = 'black';
		this.context.fillText(Math.round(this.data) + "%", 70, 60);
  }
}
