import { TestBed } from '@angular/core/testing';

import { ArrayPersone } from './array-persone';

describe('ArrayPersone', () => {
  let service: ArrayPersone;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayPersone);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
