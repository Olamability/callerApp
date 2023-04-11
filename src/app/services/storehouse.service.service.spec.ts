import { TestBed } from '@angular/core/testing';

import { StorehouseServiceService } from './storehouse.service.service';

describe('StorehouseServiceService', () => {
  let service: StorehouseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorehouseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
