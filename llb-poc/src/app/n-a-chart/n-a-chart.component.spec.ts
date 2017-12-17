import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NAChartComponent } from './n-a-chart.component';

describe('NAChartComponent', () => {
  let component: NAChartComponent;
  let fixture: ComponentFixture<NAChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NAChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NAChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
