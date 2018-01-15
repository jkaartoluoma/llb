import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaTempComponent } from './na-temp.component';

describe('NaTempComponent', () => {
  let component: NaTempComponent;
  let fixture: ComponentFixture<NaTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
