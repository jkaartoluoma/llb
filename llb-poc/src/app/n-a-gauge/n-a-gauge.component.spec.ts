import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NAGaugeComponent } from './n-a-gauge.component';

describe('NAGaugeComponent', () => {
  let component: NAGaugeComponent;
  let fixture: ComponentFixture<NAGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NAGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NAGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
