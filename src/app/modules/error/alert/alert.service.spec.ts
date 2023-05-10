import { TestBed } from '@angular/core/testing';

import { alertServiceService } from './alert.service';

describe('alertServiceService', () => {
  let service: alertServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(alertServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
