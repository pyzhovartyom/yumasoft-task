import { TestBed } from '@angular/core/testing';

import { NewSessionGuard } from './new-session.guard';

describe('NewSessionGuard', () => {
  let guard: NewSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
