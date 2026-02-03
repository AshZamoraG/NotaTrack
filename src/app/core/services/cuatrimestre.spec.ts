import { TestBed } from '@angular/core/testing';

import { Cuatrimestre } from './cuatrimestre';

describe('Cuatrimestre', () => {
  let service: Cuatrimestre;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cuatrimestre);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
