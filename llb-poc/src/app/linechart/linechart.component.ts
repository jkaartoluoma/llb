import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})

/**
 * Use input values to configure chart
 *
 * data: data variable to chart
 * length: length of x-axis (in seconds)
 * max: default max value of y axis
 * min: default min value of y axis
 * step: step in y-axis
 */
export class LinechartComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Input() length = 60;
  @Input() max = 0;
  @Input() min = 0;
  @Input() step = 1;

  public lineChartData: Array<any> = [
    {data: [], label: ''}
  ];

  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any;

  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor() {}

  ngOnInit(): void {
    const t: any[] = [];

    for (let i = 0; i < this.length; i++) {
      t[i] = 0;
      this.lineChartLabels[i] = '';
    }

    this.lineChartData = [
      {data: t, label: ''}
    ];

    this.lineChartOptions = {
      responsive: true,
      animation: {
        duration: 0                       // disable animations
      },
      legend: {
        display: false,                   // hide legend
      },
      elements: {
        line: {
          tension: 0,                     // disable bezier curves
        },
        point: {
          radius: 0                       // hide points
        }
      },
      scales: {
        xAxes: [{
          display: false                  // hide x axis
        }],
        yAxes: [{
          ticks: {
            suggestedMin: this.min,       // set default min
            suggestedMax: this.max,       // set default max
            stepSize: this.step           // set default step
          }
        }]
      },
      showXAxisLabel: false
    };
  }

  ngOnChanges() {
    const t: any[] = [];

    for (let i = 1; i < this.length; i++) {
      t[i - 1] = this.lineChartData[0].data[i];
    }

    t[this.length - 1] = this.data;

    this.lineChartData = [
      {data: t, label: ''}
    ];
  }
}
