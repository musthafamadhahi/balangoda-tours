import { TestBed, async, inject } from '@angular/core/testing';

import { TouristGuard } from './tourist.guard';

describe('TouristGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TouristGuard]
    });
  });

  it('should ...', inject([TouristGuard], (guard: TouristGuard) => {
    expect(guard).toBeTruthy();
  }));
});
