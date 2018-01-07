import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.css']
})
export class CompassComponent implements OnInit, OnChanges  {

  @ViewChild('c') myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  @Input() data: number;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
    //this.randomRot();
  }

  ngOnChanges() {
  }

  // randomRot() {
  //   setInterval(() => {
  //     this.data= Math.random()*10;
  //   }, 2000)
  // }

}
