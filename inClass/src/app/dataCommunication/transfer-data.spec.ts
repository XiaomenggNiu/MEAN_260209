import { TestBed } from '@angular/core/testing';

import { TransferData } from './transfer-data';

describe('TransferData', () => {
  let service: TransferData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
