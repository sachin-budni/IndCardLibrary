import { TestBed } from '@angular/core/testing';

import { IndCardService } from './ind-card.service';

describe('IndCardService', () => {
  let service: IndCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
