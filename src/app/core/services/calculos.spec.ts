import { TestBed } from '@angular/core/testing';

import { Calculos } from './calculos';

describe('Calculos', () => {
  let service: Calculos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Calculos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
