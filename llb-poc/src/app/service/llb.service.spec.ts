import { TestBed, inject } from '@angular/core/testing';

import { LlbService } from './llb.service';

describe('LlbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LlbService]
    });
  });

  it('should ...', inject([LlbService], (service: LlbService) => {
    expect(service).toBeTruthy();
  }));
});
