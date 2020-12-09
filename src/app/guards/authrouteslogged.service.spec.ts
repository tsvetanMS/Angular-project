import { TestBed } from '@angular/core/testing';

import { AuthroutesloggedService } from './authrouteslogged.service';

describe('AuthroutesloggedService', () => {
  let service: AuthroutesloggedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthroutesloggedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
