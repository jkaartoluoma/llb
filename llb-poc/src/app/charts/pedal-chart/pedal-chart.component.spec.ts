import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedalChartComponent } from './pedal-chart.component';

describe('PedalChartComponent', () => {
  let component: PedalChartComponent;
  let fixture: ComponentFixture<PedalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedalChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
