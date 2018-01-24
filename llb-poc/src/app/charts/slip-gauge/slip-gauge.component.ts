import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'slip-gauge',
  templateUrl: './slip-gauge.component.html',
  styleUrls: ['./slip-gauge.component.css']
})
export class SlipGaugeComponent implements OnInit, OnChanges {

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