import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-pedal-chart',
  templateUrl: './pedal-chart.component.html',
  styleUrls: ['./pedal-chart.component.css']
})
export class PedalChartComponent implements OnInit, OnChanges {
  @ViewChild('mainCanvas') myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  @Input() width = 300;
  @Input() height = 150;
  @Input() data: number;
  @Input() name: string;

  constructor() {
  }

  ngOnInit() {
    this.draw();
  }

  ngOnChanges() {
    this.draw();
  }

  /**
   * Draw pedal chart.
   *
   * Draw pedal from lower left corner to the corresponding point in circle.
   *
   * Degrees: 45 (0.25 * PI) = 0% pedal pressed, 90 (0.5 * PI) = 100% pedal pressed
   *
   * Also, draw indicators to fixed points in circle (0%, 25%, 50%, 75%, 100%)
   */
  draw() {
    const percent = this.data;
    const r = this.height * 1.2;                                          // r
    const h = this.height;                                          // height of canvas
    const w = this.width;                                           // width of canvas

    // Canvas and title
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    this.context.canvas.width = w;
    this.context.canvas.height = h;
    this.context.clearRect(0, 0, w, h);
    // this.context.font = '1em Arial';
    // this.context.fillText(this.name + ' pedal position: ' + this.data + '%', 10, 20);

    // Pedal
    // Draw from lower left corner to point P
    const a = 0.25 * Math.PI - (0.25 * Math.PI / 100 * percent);    // Alpha
    const hx = Math.sin(a) * r;                                     // x-coordinate of point P
    const wx = Math.cos(a) * r;                                     // Inverted y-coordinate of point P
    this.context.moveTo(0, h);
    this.context.lineWidth = 5;
    this.context.lineTo(wx, h - hx);
    this.context.stroke();

    // Circle
    // Draw semi-circle from 0% to 100%
    this.context.lineWidth = 1;
    this.context.beginPath();
    this.context.arc(0, h, r, 1.75 * Math.PI, 2 * Math.PI, false);
    this.context.stroke();

    // Ticks
    // Draw tick indicators to fixed points in circle
    this.context.font = '0.8em Arial';
    let ta; // temp alpha
    let tw; // temp width
    let th; // temp height

    ta = 0.25 * Math.PI;
    tw = Math.sin(ta) * r;
    th = Math.cos(ta) * r;
    this.context.fillText('0%', tw + 5, h - th - 5);

    ta = 0.3125 * Math.PI;
    tw = Math.sin(ta) * r;
    th = Math.cos(ta) * r;
    this.context.fillText('25%', tw + 5, h - th - 5);

    ta = 0.375 * Math.PI;
    tw = Math.sin(ta) * r;
    th = Math.cos(ta) * r;
    this.context.fillText('50%', tw + 5, h - th - 5);

    ta = 0.4375 * Math.PI;
    tw = Math.sin(ta) * r;
    th = Math.cos(ta) * r;
    this.context.fillText('75%', tw + 5, h - th - 5);

    ta = 0.5 * Math.PI;
    tw = Math.sin(ta) * r;
    th = Math.cos(ta) * r;
    this.context.fillText('100%', tw + 5, h - th - 5);

    // this.context.beginPath();
    // this.context.arc(wx, h - hx, 10, 2 * Math.PI, 0, false);
    this.context.stroke();
  }
}
