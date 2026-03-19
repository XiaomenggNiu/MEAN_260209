import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { fethDataResolver } from './feth-data-resolver';

describe('fethDataResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => fethDataResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
