import { TestBed, async, inject } from '@angular/core/testing';

import { ExGuardGuard } from './ex-guard.guard';

describe('ExGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExGuardGuard]
    });
  });

  it('should ...', inject([ExGuardGuard], (guard: ExGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
