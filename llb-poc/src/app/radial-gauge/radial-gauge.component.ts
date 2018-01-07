import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-radial-gauge',
  templateUrl: './radial-gauge.component.html',
  styleUrls: ['./radial-gauge.component.css']
})
export class RadialGaugeComponent implements OnInit, OnChanges {

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
