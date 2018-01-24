import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlipGaugeComponent } from './slip-gauge.component';

describe('SlipGaugeComponent', () => {
  let component: SlipGaugeComponent;
  let fixture: ComponentFixture<SlipGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlipGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlipGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
