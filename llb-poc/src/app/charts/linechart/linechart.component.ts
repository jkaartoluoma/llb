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
 * history: historical data to set on init
 * length: length of x-axis (in seconds)
 * max: default max value of y axis
 * min: default min value of y axis
 * step: step in y-axis
 */
export class LinechartComponent implements OnInit, OnChanges {
  @Input() data: number;
  @Input() history: number[] = [];
  @Input() length = 60;
  @Input() max = 0;
  @Input() min = 0;
  @Input() step = 5;
  @Input() label = '';

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

  /**
   * Set historical data, labels and settings on init
   */
  ngOnInit(): void {
    const t = this.history.slice();

    // Set labels
    for (let i = 0; i < this.length; i++) {
      this.lineChartLabels[i] = '';
    }

    // Set missing historical data to last known value or 0
    for (let i = this.history.length; i < this.length; i++) {
      t[i] = this.history.length > 0 ? this.history[this.history.length - 1] : 0;
    }

    // Reverse and set historical data to chart
    this.lineChartData = [
      {data: t.reverse(), label: this.label}
    ];

    // Settings
    this.lineChartOptions = {
      responsive: true,
      animation: {
        duration: 0                       // disable animations
      },
      legend: {
        display: this.label.length > 0,   // hide legend if no label is set
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

  /**
   * Add incoming data to chart
   */
  ngOnChanges() {
    const t: number[] = this.lineChartData[0].data.slice();

    // Add new data
    t.shift();
    t[this.length - 1] = this.data;

    // Set data to chart
    this.lineChartData = [
      {data: t, label: this.label}
    ];
  }
}
