import { TestBed, inject } from '@angular/core/testing';

import { LaTableService } from './la-table.service';

describe('LaTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaTableService]
    });
  });

  it('should be created', inject([LaTableService], (service: LaTableService) => {
    expect(service).toBeTruthy();
  }));
});
