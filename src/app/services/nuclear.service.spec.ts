import { TestBed } from '@angular/core/testing';

import { NuclearService } from './nuclear.service';

describe('NuclearService', () => {
  let service: NuclearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuclearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
