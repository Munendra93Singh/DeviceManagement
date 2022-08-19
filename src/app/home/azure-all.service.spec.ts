import { TestBed } from '@angular/core/testing';

import { AzureAllService } from './azure-all.service';

describe('AzureAllService', () => {
  let service: AzureAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
