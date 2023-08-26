import { TestBed } from '@angular/core/testing';

import { PayNowButtonStatusCheckService } from './pay-now-button-status-check.service';

describe('PayNowButtonStatusCheckService', () => {
  let service: PayNowButtonStatusCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayNowButtonStatusCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
