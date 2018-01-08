import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutTempChartComponent } from './out-temp-chart.component';

describe('OutTempChartComponent', () => {
  let component: OutTempChartComponent;
  let fixture: ComponentFixture<OutTempChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutTempChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutTempChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
