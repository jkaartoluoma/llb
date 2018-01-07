import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'rpm-gauge',
  templateUrl: './rpm-gauge.component.html',
  styleUrls: ['./rpm-gauge.component.css']
})
export class RpmGaugeComponent implements OnInit, OnChanges {

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
