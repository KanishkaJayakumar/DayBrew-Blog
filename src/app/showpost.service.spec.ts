import { TestBed } from '@angular/core/testing';

import { ShowpostService } from './showpost.service';

describe('ShowpostService', () => {
  let service: ShowpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
