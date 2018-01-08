import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementDataComponent } from './movement-data.component';

describe('MovementDataComponent', () => {
  let component: MovementDataComponent;
  let fixture: ComponentFixture<MovementDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
