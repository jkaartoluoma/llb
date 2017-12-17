import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';
import {LoaderService} from '../service/loader.service';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let mockLoaderService;

  beforeEach(async(() => {
    mockLoaderService = {
      getTasks() {}
    };

    TestBed.configureTestingModule({
      declarations: [ LoaderComponent ],
      providers: [
        {provide: LoaderService, useValue: mockLoaderService}
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
