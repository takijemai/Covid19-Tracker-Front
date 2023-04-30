import { TestBed } from '@angular/core/testing';

import { CovidoperationsService } from './covidoperations.service';

describe('CovidoperationsService', () => {
  let service: CovidoperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidoperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
