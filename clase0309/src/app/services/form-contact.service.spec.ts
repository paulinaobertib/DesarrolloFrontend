import { TestBed } from '@angular/core/testing';

import { FormContactServiceTs } from './form-contact.service.js';

describe('FormContactServiceTs', () => {
  let service: FormContactServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormContactServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
