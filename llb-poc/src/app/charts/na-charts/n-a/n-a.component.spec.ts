import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NAComponent } from './n-a.component';

describe('NAComponent', () => {
  let component: NAComponent;
  let fixture: ComponentFixture<NAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
