import { TestBed, inject } from '@angular/core/testing';

import { AttacksService } from './attacks.service';

describe('AttacksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttacksService]
    });
  });

  it('should be created', inject([AttacksService], (service: AttacksService) => {
    expect(service).toBeTruthy();
  }));
});
